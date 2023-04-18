import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppService } from './app.service';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private fragment: string;
  @ViewChild('recipes') recipeSection: ElementRef;
  @ViewChild('welcomePage') welcomePageSection: ElementRef;
  @ViewChild('toShoppingListPage') toShoppingListPage: ElementRef;
  @ViewChild('shoppingList') shoppingList: ElementRef;



  constructor(
    private appService: AppService,
    private dataStorageService: DataStorageService,
    ){}
  
  ngOnInit(): void {


    this.appService.OnLooktoRecipes.subscribe((clicked)=>{
      this.recipeSection.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
    })
    
    this.appService.toWelcomePage.subscribe((clicked)=>{
      this.welcomePageSection.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
    })

    this.appService.toShoppingListPage.subscribe((clicked)=>{
      this.toShoppingListPage.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
    })

    this.appService.toShoppingList.subscribe((clicked)=>{
      this.shoppingList.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
    })

}
  }

