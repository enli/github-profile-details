import { Component, OnInit } from '@angular/core';
import {GithubProfileService} from "./github-profiles-list/shared/github-profile.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GithubProfileService]
})

export class AppComponent implements OnInit {
  public model;

  constructor(private profileService: GithubProfileService) {

  }

  ngOnInit() {
    this.model = {};
  }

  doSearchUser(): void {
    // XXX: instead of saving model of username,
    // use # template reference
    // https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars
    // console.log(this.model.username);

    this.profileService.addUser(this.model.username)
      .subscribe(user => {
        console.log('user added.');
      }, err => {
        // TODO: design a banner
        alert('Could not add the user. \nError occurred: ' + (err.statusText ? err.statusText : err));
      });

    this.model.username = '';
  }
}
