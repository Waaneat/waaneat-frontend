import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDishComponent } from './filter-dish.component';

describe('FilterDishComponent', () => {
  let component: FilterDishComponent;
  let fixture: ComponentFixture<FilterDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterDishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
