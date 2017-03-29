import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Observable}     from 'rxjs/Observable';
import {GithubProfile} from "../github-profile";

import 'rxjs/add/operator/map';
import {Subject} from "rxjs";

@Injectable()
export class GithubProfileService {

  private userUrl = 'https://api.github.com/users/';
  private usersListObservable: Subject<GithubProfile>;

  constructor(private http: Http) {
    this.usersListObservable = <Subject<GithubProfile>> new Subject();
  }

  // XXX: return a promise later
  public addUser(username: string): Observable<GithubProfile> {
    return this.http.get(this.userUrl + username)
      .map(response => response.json() as GithubProfile)
      .map(res => {
        // XXX: do we have better way to handle this case?
        // Without this patch, location sorting looks weird
        if (!res.location) {
          res.location = '';
        }

        if (!res.name) {
          res.name = '';
        }

        // push new user to observers
        this.usersListObservable.next(res);
        return res;
      });
  }

  public getUsers(): Observable<GithubProfile> {
    return this.usersListObservable;
  }
}
