import { EventEmitter } from "@angular/core";

export class AppService{
    OnLooktoRecipes = new EventEmitter<boolean>();
}