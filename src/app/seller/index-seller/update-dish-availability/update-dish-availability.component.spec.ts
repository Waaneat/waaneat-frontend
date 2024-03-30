import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDishAvailabilityComponent } from './update-dish-availability.component';

describe('UpdateDishAvailabilityComponent', () => {
  let component: UpdateDishAvailabilityComponent;
  let fixture: ComponentFixture<UpdateDishAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDishAvailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateDishAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
