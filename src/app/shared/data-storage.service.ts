import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";
import { exhaustMap, take } from "rxjs";

@Injectable()

export class DataStorageService {
    constructor(
        private http: HttpClient,
        private authService: AuthService
        ) {}
     
   
     storeRecipes(recipes){
        this.http.put('https://recipebook-krkeek-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',recipes)
        .subscribe(()=>{
        })
            
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>('https://recipebook-krkeek-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
    } 

} 


