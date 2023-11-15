import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassResetComponent } from './forget-pass-reset.component';

describe('ForgetPassResetComponent', () => {
  let component: ForgetPassResetComponent;
  let fixture: ComponentFixture<ForgetPassResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPassResetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPassResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
