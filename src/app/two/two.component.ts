import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppValues, Errors } from '../app.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
  @Input() appValues: AppValues;
  @Output() next = new EventEmitter<AppValues>();
  @Output() hasErrors = new EventEmitter<Errors>();

  constructor() {}

  getResults(): void {
    const appValuesCopy = this.appValues;
    appValuesCopy.visiblePanel = 'three';
    this.next.emit(appValuesCopy);
  }

  ngOnInit(): void {}
}
