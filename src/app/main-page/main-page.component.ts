import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainPageService } from './main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @ViewChild('recipes') recipeSection: ElementRef;
  @ViewChild('welcomePage') welcomePageSection: ElementRef;
  @ViewChild('toShoppingListPage') toShoppingListPage: ElementRef;
  @ViewChild('shoppingList') shoppingList: ElementRef;

  constructor(private mainPageService : MainPageService){}

  ngOnInit(): void {
    this.mainPageService.OnLooktoRecipes.subscribe((clicked)=>{
      this.recipeSection.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
    })
    
    this.mainPageService.toWelcomePage.subscribe((clicked)=>{
      this.welcomePageSection.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
    })

    this.mainPageService.toShoppingListPage.subscribe((clicked)=>{
      this.toShoppingListPage.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
    })

    this.mainPageService.toShoppingList.subscribe((clicked)=>{
      this.shoppingList.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
    })

  }





}
