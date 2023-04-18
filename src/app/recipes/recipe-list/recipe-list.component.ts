import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService
             
              ) {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    console.log("list started");
    this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[])=>{
      console.log("Subsbscribe Worked!! "+recipes);
      this.recipes = recipes
    })
    this.dataStorageService.fetchRecipes().subscribe( recipes =>{
      console.log("fetched")
      this.recipeService.setRecipes(recipes);            
  })

  }

}
