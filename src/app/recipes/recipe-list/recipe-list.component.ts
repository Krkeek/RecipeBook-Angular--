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
  subsciption: Subscription

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService
             
              ) {
  }
  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subsciption = this.recipeService.recipesChanged.subscribe((recipes: Recipe[])=>{
      this.recipes = recipes
    })

    this.dataStorageService.fetchRecipes().subscribe(recipes =>{
      this.recipeService.setRecipes(recipes);
    })
  }

}
