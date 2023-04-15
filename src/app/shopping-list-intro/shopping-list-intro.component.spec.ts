import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListIntroComponent } from './shopping-list-intro.component';

describe('ShoppingListIntroComponent', () => {
  let component: ShoppingListIntroComponent;
  let fixture: ComponentFixture<ShoppingListIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
