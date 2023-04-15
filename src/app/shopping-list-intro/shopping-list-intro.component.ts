import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list-intro',
  templateUrl: './shopping-list-intro.component.html',
  styleUrls: ['./shopping-list-intro.component.css']
})
export class ShoppingListIntroComponent {

  constructor(private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  toShoppingList(){
    this.appService.toShoppingList.emit(true);
  }

  toRecipePage(){
    this.appService.OnLooktoRecipes.emit(true);

  }



}
