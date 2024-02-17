import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDishesComponent } from './search-dishes.component';

describe('SearchDishesComponent', () => {
  let component: SearchDishesComponent;
  let fixture: ComponentFixture<SearchDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchDishesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
