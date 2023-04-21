import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from 'rxjs/operators'
import { BehaviorSubject, Subject, throwError} from 'rxjs';
import { User } from "./user.model";
import { Router } from "@angular/router";
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "@angular/fire/app";
import { environment } from "src/environments/environment";

export interface AuthSignInData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered: boolean;
}
export interface AuthSignUpData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    
  
    user = new BehaviorSubject<User>(null)
    tokenExpirationTimer: any;
    



    constructor(private http: HttpClient, private router: Router){}

    signup(email:string, password: string){
        return this.http.post<AuthSignUpData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBK-Jhj4f2cgb4YDLGPgytLOcd8MPzI4Xo',
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(
            catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
            })
        )   

    }

    signin(email: string, password: string){
        return this.http.post<AuthSignInData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBK-Jhj4f2cgb4YDLGPgytLOcd8MPzI4Xo',
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(
            catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
            })
        )

    }

    private handleAuthentication(email: string,userId: string, token: string, expiresIn: number){
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
        const user = new User(email, userId , token,expirationDate);
        this.user.next(user);
        this.autoLogOut(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user))
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error occured!';
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'This email is already exists';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = "This email doesn't exist.";
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Email or password is invalid.'


            
        }
        return throwError(errorMessage);

    }

    logout(){
        this.user.next(null);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
    }

    autoLogin(){
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if(!userData){
            return
        }else{
            const loadedUser = new User(userData.email,userData.id, userData._token,new Date(userData._tokenExpirationDate));
            if(loadedUser.token){
          this.user.next(loadedUser);
          const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
          this.autoLogOut(expirationDuration);
            }
        
        }
    }

    autoLogOut(expirationDuration: number, ){
        this.tokenExpirationTimer = setTimeout(()=>{
            this.logout();
        }, expirationDuration)

    }
   

    signInWithGoogle(){
        const fireConfig = environment.firebase;
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth,googleProvider).then((result)=>{
             // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;




        }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    }
    


}