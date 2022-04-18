import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntriesBoardComponent } from './blog-entries-board.component';

describe('BlogEntriesBoardComponent', () => {
  let component: BlogEntriesBoardComponent;
  let fixture: ComponentFixture<BlogEntriesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogEntriesBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntriesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
