import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesAdaptiveTableComponent } from './taxes-adaptive-table.component';

describe('TaxesAdaptiveTableComponent', () => {
  let component: TaxesAdaptiveTableComponent;
  let fixture: ComponentFixture<TaxesAdaptiveTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxesAdaptiveTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxesAdaptiveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
