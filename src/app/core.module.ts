import { NgModule } from "@angular/core";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { MainPageService } from "./main-page/main-page.service";
import { DataStorageService } from "./shared/data-storage.service";
import { RecipeService } from "./recipes/recipe.service";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http"

@NgModule({
    providers: [
        ShoppingListService,
         MainPageService,
          DataStorageService,
           RecipeService,
         {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ]
})
export class CoreModule{}