import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './welcome-page/recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './welcome-page/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './welcome-page/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './welcome-page/recipes/recipe-edit/recipe-edit.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'welcome-page', component: WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
