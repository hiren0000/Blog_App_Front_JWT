import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingSpecificBlogComponent } from './reading-specific-blog.component';

describe('ReadingSpecificBlogComponent', () => {
  let component: ReadingSpecificBlogComponent;
  let fixture: ComponentFixture<ReadingSpecificBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingSpecificBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingSpecificBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
