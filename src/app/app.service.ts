import { EventEmitter } from "@angular/core";

export class AppService{
    OnLooktoRecipes = new EventEmitter<boolean>();
    toWelcomePage = new EventEmitter<boolean>();
    toShoppingListPage = new EventEmitter<boolean>();
    toShoppingList = new EventEmitter<boolean>();
}