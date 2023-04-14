import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent {

  constructor(private appService: AppService){}

  lookForRecipes(){
    this.appService.OnLooktoRecipes.emit(true);
  }

}
