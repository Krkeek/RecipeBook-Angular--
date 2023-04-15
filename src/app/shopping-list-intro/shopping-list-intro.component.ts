import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-shopping-list-intro',
  templateUrl: './shopping-list-intro.component.html',
  styleUrls: ['./shopping-list-intro.component.css']
})
export class ShoppingListIntroComponent {

  constructor(private appService: AppService){}

  toShoppingList(){
    this.appService.toShoppingList.emit(true);
  }

}
