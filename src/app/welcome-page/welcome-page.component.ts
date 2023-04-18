import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { MainPageService } from '../main-page/main-page.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent {

  constructor(private mainPageService: MainPageService, private dataStorageService: DataStorageService){}

  lookForRecipes(){
    this.mainPageService.OnLooktoRecipes.emit(true);
  }

}
