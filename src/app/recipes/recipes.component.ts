import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';
import { MainPageService } from '../main-page/main-page.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor(private mainPageService: MainPageService) {
  }

  ngOnInit() {

  }

  toWelcomePage(){
    this.mainPageService.toWelcomePage.emit(true);
  }
  toShoppingListPage(){
    this.mainPageService.toShoppingListPage.emit(true);
  }
  

}
