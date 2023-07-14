import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDialogueComponent } from './comment-dialogue.component';

describe('CommentDialogueComponent', () => {
  let component: CommentDialogueComponent;
  let fixture: ComponentFixture<CommentDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
