import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SortBy} from "./sort-by";

@Component({
  selector: 'list-sort-by',
  templateUrl: './list-sort-by.component.html',
  styleUrls: ['./list-sort-by.component.scss']
})
export class ListSortByComponent implements OnInit {

  @Input() sortByList: Array<SortBy>;
  @Output() onSorted = new EventEmitter<SortBy>();

  constructor() {
  }

  ngOnInit() {
  }

  onSort(sortBy: SortBy): void {
    // can we simplify this mess?
    this.sortByList.forEach(s => {
      if (sortBy.id === s.id) {
        if (!s.asc && !s.desc) {
          // set default
          s.asc = true;
        } else {
          // invert as either this condition is sorted in asc or desc order
          s.asc = !s.asc;
          s.desc = !s.desc;
        }
      } else {
        // turn off for all other criteria
        s.asc = false;
        s.desc = false;
      }
    });

    // invoke callback function
    this.onSorted.emit(sortBy);
  }

}
