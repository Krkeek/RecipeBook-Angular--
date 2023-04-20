import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from 'rxjs/operators'
import { BehaviorSubject, Subject, throwError} from 'rxjs';
import { User } from "./user.model";
import { Router } from "@angular/router";

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
    }
}