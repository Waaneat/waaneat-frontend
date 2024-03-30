import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSellerInformationComponent } from './update-seller-information.component';

describe('UpdateSellerInformationComponent', () => {
  let component: UpdateSellerInformationComponent;
  let fixture: ComponentFixture<UpdateSellerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateSellerInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSellerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
