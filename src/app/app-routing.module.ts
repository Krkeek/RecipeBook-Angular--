import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuthComponent } from './auth/auth.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';


 const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent},
  { path: '', component: RecipeStartComponent,outlet: 'recipeRoutes' },
  { path: 'new', component: RecipeEditComponent,outlet: 'recipeRoutes' },
  { path: ':id', component: RecipeDetailComponent,outlet: 'recipeRoutes', resolve:[RecipesResolverService] },
  { path: ':id/edit', component: RecipeEditComponent,outlet: 'recipeRoutes',resolve:[RecipesResolverService] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
