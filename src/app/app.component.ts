import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private fragment: string;
  @ViewChild('recipes') recipeSection: ElementRef;

  constructor(private route: ActivatedRoute,private appService: AppService, private router: Router){}
  
  ngOnInit(): void {
    this.appService.OnLooktoRecipes.subscribe((clicked)=>{
      this.recipeSection.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
    })
    
  
}
  }

