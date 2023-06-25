import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListPostsForSpeCateComponent } from './view-list-posts-for-spe-cate.component';

describe('ViewListPostsForSpeCateComponent', () => {
  let component: ViewListPostsForSpeCateComponent;
  let fixture: ComponentFixture<ViewListPostsForSpeCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListPostsForSpeCateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewListPostsForSpeCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
