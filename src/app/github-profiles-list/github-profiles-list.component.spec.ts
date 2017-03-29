import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfilesListComponent } from './github-profiles-list.component';

describe('GithubProfilesListComponent', () => {
  let component: GithubProfilesListComponent;
  let fixture: ComponentFixture<GithubProfilesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubProfilesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
