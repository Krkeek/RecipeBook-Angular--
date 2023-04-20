import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthSignInData,AuthSignUpData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(
    private authService: AuthService,
    private router: Router
    ){}
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    let authSignInObs: Observable<AuthSignInData>;
    let authSignUpObs: Observable<AuthSignUpData>;


    if(this.isLoginMode){
      authSignInObs = this.authService.signin(email,password);
      authSignInObs
      .subscribe(
        resData =>{
        this.router.navigate(['/main-page'])
      },
      errorMessage => {
        this.error = errorMessage;
      }
      )
  
    }else{
      authSignUpObs = this.authService.signup(email,password);
      authSignUpObs
      .subscribe(
        resData =>{
        this.router.navigate(['/main-page'])
      },
      errorMessage => {
        this.error = errorMessage;
      }
      )
    }

   
    this.isLoading = false;


    form.reset();

  }

}
