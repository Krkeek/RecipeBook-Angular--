import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subsciption: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  @ViewChild('f') slForm: NgForm;
 
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subsciption = this.slService.startingEditing
    .subscribe(
      (index: number)=>{
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(this.editItemIndex);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })

      }
    );
  }
  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }

  onSubmit(form) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editItemIndex, newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }
  onClear(){
    this.editMode = false;
    this.slForm.reset();

  }

  onDelete(){
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();

  }

}
