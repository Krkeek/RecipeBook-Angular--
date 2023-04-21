import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling'
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ShoppingListIntroComponent } from './shopping-list-intro/shopping-list-intro.component';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { environment } from '../environments/environment';
import { MainPageService } from './main-page/main-page.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { MainPageComponent } from './main-page/main-page.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceHolderDirective } from './shared/placeholder/placeholder.directive';
import { RecipesModule } from './recipes/recipes.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    WelcomePageComponent,
    ShoppingListIntroComponent,
    AuthComponent,
    MainPageComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ScrollingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    RecipesModule 
      ],
  providers: [ShoppingListService, MainPageService, DataStorageService, RecipeService,
     {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {

}
