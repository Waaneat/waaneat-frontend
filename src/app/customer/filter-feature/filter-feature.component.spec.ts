import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFeatureComponent } from './filter-feature.component';

describe('FilterFeatureComponent', () => {
  let component: FilterFeatureComponent;
  let fixture: ComponentFixture<FilterFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
