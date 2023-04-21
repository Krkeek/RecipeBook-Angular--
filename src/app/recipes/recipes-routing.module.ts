import { NgModule } from "@angular/core";
import { MainPageComponent } from "../main-page/main-page.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AuthGuard } from "../auth/auth.guard";
import { RecipesResolverService } from "./recipes-resolver.service";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes =  [

    { path: 'main-page', component: MainPageComponent, canActivate: [AuthGuard], children:[
        { path: '', component: RecipeStartComponent,outlet: 'recipeRoutes' },
        { path: 'new', component: RecipeEditComponent,outlet: 'recipeRoutes' },
        { path: ':id', component: RecipeDetailComponent,outlet: 'recipeRoutes', resolve:[RecipesResolverService] },
        { path: ':id/edit', component: RecipeEditComponent,outlet: 'recipeRoutes',resolve:[RecipesResolverService] },
      ] },

]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class RecipesRoutingModule{
    
}