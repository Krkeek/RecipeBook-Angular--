import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthSignInData,AuthSignUpData, AuthService } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy {
  @ViewChild(PlaceHolderDirective, {static:false}) alertHost: PlaceHolderDirective;
  private closeSub: Subscription ;

  statement = "Create new account? ";
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
    ){}
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;

  }

  ngOnDestroy(): void {
    if(this.closeSub)
    this.closeSub.unsubscribe();
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
    this.statement = "Create new account? ";
      authSignInObs = this.authService.signin(email,password);
      authSignInObs
      .subscribe(
        resData =>{
        this.router.navigate(['/main-page'])
      },
      errorMessage => {
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
      }
      )
  
    }else{
      this.statement = "Already have an account? ";
      authSignUpObs = this.authService.signup(email,password);
      authSignUpObs
      .subscribe(
        resData =>{
        this.router.navigate(['/main-page'])
      },
      errorMessage => {
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
      }
      )
    }

   
    this.isLoading = false;


    form.reset();

  }
  signInWithGoogle(){
    this.authService.signInWithGoogle();
  }
  onHandleError(){
    this.error = null;
  }
  showErrorAlert(message: string){
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
    
  }

}


