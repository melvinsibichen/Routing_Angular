import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductupdatesComponent } from './productupdates.component';

describe('ProductupdatesComponent', () => {
  let component: ProductupdatesComponent;
  let fixture: ComponentFixture<ProductupdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductupdatesComponent]
    });
    fixture = TestBed.createComponent(ProductupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
