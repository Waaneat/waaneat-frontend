import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRestoComponent } from './filter-resto.component';

describe('FilterRestoComponent', () => {
  let component: FilterRestoComponent;
  let fixture: ComponentFixture<FilterRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterRestoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
