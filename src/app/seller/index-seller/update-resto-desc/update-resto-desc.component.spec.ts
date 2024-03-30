import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestoDescComponent } from './update-resto-desc.component';

describe('UpdateRestoDescComponent', () => {
  let component: UpdateRestoDescComponent;
  let fixture: ComponentFixture<UpdateRestoDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRestoDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateRestoDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
