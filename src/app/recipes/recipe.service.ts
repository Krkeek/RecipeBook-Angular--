import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
        new Recipe('Test',
        'Test',
        'https://previews.123rf.com/images/boarding1now/boarding1now1212/boarding1now121200021/16690745-frische-salami-pizza-isoliert-auf-wei%C3%9Fem-hintergrund.jpg',
        [
          new Ingredient('Salami', 2),
          new Ingredient('Tomato Sauce', 1)
        ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }



  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
 
  
  }

  updateRecipe(index: number,newRecipe: Recipe){
     this.recipes[index] = newRecipe;
     this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(index: number){
this.recipes.splice(index,1); 
this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    const recipesToArray = Object.values(recipes);
    this.recipes = recipesToArray;
    this.recipesChanged.next(this.recipes.slice());
    console.log(this.recipes);

  }

}

