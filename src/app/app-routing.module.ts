import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


// const appRoutes: Routes = [
//   {path: '', component: AppComponent},
//   { path: 'shopping-list', component: ShoppingListComponent },
//   { path: 'welcome-page', component: WelcomePageComponent},
//   { path: 'recipes', component: RecipesComponent, children: [
//     { path: '', component: RecipeStartComponent, outlet: 'recipeRoutes' },
//     { path: 'new', component: RecipeEditComponent, outlet: 'recipeRoutes' },
//     { path: ':id', component: RecipeDetailComponent, outlet: 'recipeRoutes' },
//     { path: ':id/edit', component: RecipeEditComponent, outlet: 'recipeRoutes' },
//   ] },
//   { path: '**', redirectTo: '' }
// ];


 const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: '', component: RecipeStartComponent,outlet: 'recipeRoutes' },
  { path: 'new', component: RecipeEditComponent,outlet: 'recipeRoutes' },
  { path: ':id', component: RecipeDetailComponent,outlet: 'recipeRoutes' },
  { path: ':id/edit', component: RecipeEditComponent,outlet: 'recipeRoutes' },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
