import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentOperationsComponent } from './comment-operations.component';

describe('CommentOperationsComponent', () => {
  let component: CommentOperationsComponent;
  let fixture: ComponentFixture<CommentOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
