import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimalComponent } from './primal.component';

describe('PrimalComponent', () => {
  let component: PrimalComponent;
  let fixture: ComponentFixture<PrimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimalComponent]
    });
    fixture = TestBed.createComponent(PrimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
