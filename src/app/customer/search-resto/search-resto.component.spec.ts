import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRestoComponent } from './search-resto.component';

describe('SearchRestoComponent', () => {
  let component: SearchRestoComponent;
  let fixture: ComponentFixture<SearchRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchRestoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
