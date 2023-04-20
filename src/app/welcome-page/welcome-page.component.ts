import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { MainPageService } from '../main-page/main-page.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent implements OnInit, OnDestroy {
  isAuthenticated = false;

  constructor(private mainPageService: MainPageService,private authService: AuthService, private router: Router){}

  private userSub: Subscription;
  lookForRecipes(){
    this.mainPageService.OnLooktoRecipes.emit(true);
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user =>{
      this.isAuthenticated = !!user;       
    })
  }
ngOnDestroy() {
  this.userSub.unsubscribe();
}
logout(){
  this.authService.logout();
}
}
