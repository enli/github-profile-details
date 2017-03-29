import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSortByComponent } from './list-sort-by.component';

describe('ListSortByComponent', () => {
  let component: ListSortByComponent;
  let fixture: ComponentFixture<ListSortByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSortByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSortByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
