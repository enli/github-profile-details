import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {GithubProfile} from "../github-profiles-list/github-profile";

@Component({
  moduleId: module.id,
  selector: 'github-profile-card',
  templateUrl: './github-profile-card.component.html',
  styleUrls: ['./github-profile-card.component.scss']
})
export class GithubProfileCardComponent implements OnInit {

  @Input() profile: GithubProfile;
  @Output() onDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public openProfile(): void {
    window.open(this.profile.html_url, '_blank');
  }

  public onProfileKeyDown($event): void {
    if (this.isEnterKeyPressed($event)) {
      $event.preventDefault();
      this.openProfile();
    }
  }

  public deleteProfile($event): void {
    $event.preventDefault();

    // pass event to parent
    this.onDeleted.emit(this.profile.id);
  }

  public onDeleteProfileKeyDown($event): void {
    if (this.isEnterKeyPressed($event)) {
      $event.preventDefault();
      this.deleteProfile($event);
    }
  }

  private isEnterKeyPressed($event): boolean {
    return $event && $event.which === 13;
  }
}
