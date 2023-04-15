import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { RecipeService } from './recipe.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor(private appService: AppService) {
  }

  ngOnInit() {

  }

  toWelcomePage(){
    this.appService.toWelcomePage.emit(true);
  }
  toShoppingListPage(){
    this.appService.toShoppingListPage.emit(true);
  }
  

}
