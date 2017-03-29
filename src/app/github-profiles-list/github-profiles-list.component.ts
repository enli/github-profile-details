import {Component, OnInit} from '@angular/core';
import {GithubProfileService} from './shared/github-profile.service';
import {GithubProfile} from "./github-profile";
import {SortBy} from "../list-sort-by/sort-by";

@Component({
  moduleId: module.id,
  selector: 'github-profiles-list',
  templateUrl: './github-profiles-list.component.html',
  styleUrls: ['./github-profiles-list.component.scss']
})

export class GithubProfilesListComponent implements OnInit {

  public sortBy: Array<SortBy>;
  public profiles;
  public lastSortedBy: SortBy;

  constructor(private profileService: GithubProfileService) {
  }

  ngOnInit() {
    this.sortBy = [
      {id: 'name', label: 'Name', asc: true, desc: false},
      {id: 'location', label: 'Location', asc: false, desc: false},
      {id: 'followers', label: 'Followers', asc: false, desc: false},
    ];

    this.profiles = [];
    // whenever new user is added, we would get it through subscriber below
    this.profileService.getUsers().subscribe(profile => this.addUser(profile));

    // this.addDummyProfiles();
  }

  private addDummyProfiles() {
    for (let i = 6; i > 0; i--) {
      this.profiles.push({
        id: 'test' + i,
        name: 'test' + i,
        location: 'some long location goes here',
        followers: i,
        avatar_url: 'https://avatars0.githubusercontent.com/u/37722?v=3'
      });
    }
  }

  public trackProfile(index: number, profile: GithubProfile) {
    return profile ? profile.id : null;
  }

  public onDeleted(id: number): void {
    // update the profiles, excluding the deleted profile
    this.profiles = this.profiles.filter(profile => {
      return profile.id !== id;
    });
  }

  public addUser(profile: GithubProfile): void {
    if (!this.isUserAlreadyPresent(+profile.id)) {
      this.profiles.push(profile);
    } else {
      // TODO: show banner message
      console.error('User already exists');
    }
  }

  public isUserAlreadyPresent(id: number): boolean {
    for (let i = 0; i < this.profiles.length; i++) {
      if (this.profiles[i].id === id) {
        return true;
      }
    }

    return false;
  }

  public onProfilesSorted(sortedBy: SortBy): void {
    this.lastSortedBy = sortedBy;
    this.sortProfilesBy(sortedBy);
  }

  private sortProfilesBy(sortBy: SortBy) {
    // do not mutate, work on new array
    let tempArr = this.profiles.slice();

    tempArr.sort(function sortProfilesComparator(a, b) {
      let ret = null;

      if (a[sortBy.id] > b[sortBy.id]) {
        ret = 1;
      } else if (a[sortBy.id] < b[sortBy.id]) {
        ret = -1;
      } else {
        return 0;
      }

      return sortBy.asc ? ret : (-1 * ret);
    });

    this.profiles = tempArr;
  }
}
