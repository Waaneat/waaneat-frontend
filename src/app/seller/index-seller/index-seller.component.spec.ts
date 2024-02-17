import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSellerComponent } from './index-seller.component';

describe('IndexSellerComponent', () => {
  let component: IndexSellerComponent;
  let fixture: ComponentFixture<IndexSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexSellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
