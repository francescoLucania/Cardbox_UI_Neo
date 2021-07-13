import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMixinsComponent } from './service-mixins.component';

describe('ServiceMixinsComponent', () => {
  let component: ServiceMixinsComponent;
  let fixture: ComponentFixture<ServiceMixinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceMixinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMixinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
