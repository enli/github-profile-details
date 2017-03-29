import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubProfilesListComponent } from './github-profiles-list/github-profiles-list.component';
import { GithubProfileCardComponent } from './github-profile-card/github-profile-card.component';
import { ListSortByComponent } from './list-sort-by/list-sort-by.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfilesListComponent,
    GithubProfileCardComponent,
    ListSortByComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
