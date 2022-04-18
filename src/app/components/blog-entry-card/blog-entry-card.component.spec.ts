import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntryCardComponent } from './blog-entry-card.component';

describe('BlogEntryCardComponent', () => {
  let component: BlogEntryCardComponent;
  let fixture: ComponentFixture<BlogEntryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogEntryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
