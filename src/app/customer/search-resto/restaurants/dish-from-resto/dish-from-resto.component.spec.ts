import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishFromRestoComponent } from './dish-from-resto.component';

describe('DishFromRestoComponent', () => {
  let component: DishFromRestoComponent;
  let fixture: ComponentFixture<DishFromRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishFromRestoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DishFromRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
