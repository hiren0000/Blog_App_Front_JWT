import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdatePostComponent } from './user-update-post.component';

describe('UserUpdatePostComponent', () => {
  let component: UserUpdatePostComponent;
  let fixture: ComponentFixture<UserUpdatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdatePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpdatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
