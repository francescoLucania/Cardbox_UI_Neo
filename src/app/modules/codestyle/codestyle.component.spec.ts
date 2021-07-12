import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodestyleComponent } from './codestyle.component';

describe('CodestyleComponent', () => {
  let component: CodestyleComponent;
  let fixture: ComponentFixture<CodestyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodestyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
