import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainPageService } from '../main-page/main-page.service';

@Component({
  selector: 'app-shopping-list-intro',
  templateUrl: './shopping-list-intro.component.html',
  styleUrls: ['./shopping-list-intro.component.css']
})
export class ShoppingListIntroComponent {

  constructor(private mainPageService: MainPageService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  toShoppingList(){
    this.mainPageService.toShoppingList.emit(true);
  }

  toRecipePage(){
    this.mainPageService.OnLooktoRecipes.emit(true);

  }



}
