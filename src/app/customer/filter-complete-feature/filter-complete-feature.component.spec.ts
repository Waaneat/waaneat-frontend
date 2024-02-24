import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCompleteFeatureComponent } from './filter-complete-feature.component';

describe('FilterCompleteFeatureComponent', () => {
  let component: FilterCompleteFeatureComponent;
  let fixture: ComponentFixture<FilterCompleteFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterCompleteFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterCompleteFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
