import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling'
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
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
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    WelcomePageComponent,
    ShoppingListIntroComponent,
    MainPageComponent,    
  ],
  imports: [
    FormsModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    HttpClientModule,
    CoreModule,
    AuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    RecipesModule 
      ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
