import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs";

@Injectable()

export class DataStorageService {
    constructor(private http: HttpClient) {}

        
    addNewRecipe(recipe: Recipe){
            return this.http.post('https://recipebook-krkeek-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipe);
    }

    updateRecipe(index: number, recipe: Recipe){
        
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>('https://recipebook-krkeek-default-rtdb.europe-west1.firebasedatabase.app/recipes.json');
    }
    deleteRecipe( recipeName:String, recipeDescription: String){
        

    }
} 


