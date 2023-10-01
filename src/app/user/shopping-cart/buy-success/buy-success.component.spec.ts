import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySuccessComponent } from './buy-success.component';

describe('BuySuccessComponent', () => {
  let component: BuySuccessComponent;
  let fixture: ComponentFixture<BuySuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuySuccessComponent]
    });
    fixture = TestBed.createComponent(BuySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
