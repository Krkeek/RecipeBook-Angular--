import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://cdn.gutekueche.de/upload/rezept/371/wiener-schnitzel.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://img.freepik.com/premium-photo/single-fresh-burger_693588-34.jpg?w=740',
      [
        new Ingredient('Cheese', 2),
        new Ingredient('Meat', 1)
      ]),
      new Recipe('Salami Pizza',
      'Best Pizza Ever!',
      'https://previews.123rf.com/images/boarding1now/boarding1now1212/boarding1now121200021/16690745-frische-salami-pizza-isoliert-auf-wei%C3%9Fem-hintergrund.jpg',
      [
        new Ingredient('Salami', 2),
        new Ingredient('Tomato Sauce', 1)
      ]), new Recipe(
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://cdn.gutekueche.de/upload/rezept/371/wiener-schnitzel.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
      new Recipe('Big Fat Burger',
        'What else you need to say?',
        'https://img.freepik.com/premium-photo/single-fresh-burger_693588-34.jpg?w=740',
        [
          new Ingredient('Cheese', 2),
          new Ingredient('Meat', 1)
        ]),
        new Recipe('Salami Pizza',
        'Best Pizza Ever!',
        'https://previews.123rf.com/images/boarding1now/boarding1now1212/boarding1now121200021/16690745-frische-salami-pizza-isoliert-auf-wei%C3%9Fem-hintergrund.jpg',
        [
          new Ingredient('Salami', 2),
          new Ingredient('Tomato Sauce', 1)
        ]), new Recipe(
          'Tasty Schnitzel',
          'A super-tasty Schnitzel - just awesome!',
          'https://cdn.gutekueche.de/upload/rezept/371/wiener-schnitzel.jpg',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]),
        new Recipe('Big Fat Burger',
          'What else you need to say?',
          'https://img.freepik.com/premium-photo/single-fresh-burger_693588-34.jpg?w=740',
          [
            new Ingredient('Cheese', 2),
            new Ingredient('Meat', 1)
          ]),
          new Recipe('Salami Pizza',
          'Best Pizza Ever!',
          'https://previews.123rf.com/images/boarding1now/boarding1now1212/boarding1now121200021/16690745-frische-salami-pizza-isoliert-auf-wei%C3%9Fem-hintergrund.jpg',
          [
            new Ingredient('Salami', 2),
            new Ingredient('Tomato Sauce', 1)
          ]), new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://cdn.gutekueche.de/upload/rezept/371/wiener-schnitzel.jpg',
            [
              new Ingredient('Meat', 1),
              new Ingredient('French Fries', 20)
            ]),
          new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://img.freepik.com/premium-photo/single-fresh-burger_693588-34.jpg?w=740',
            [
              new Ingredient('Cheese', 2),
              new Ingredient('Meat', 1)
            ]),
            new Recipe('Salami Pizza',
            'Best Pizza Ever!',
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
}
