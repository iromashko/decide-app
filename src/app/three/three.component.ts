import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppValues } from '../app.component';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements OnInit {
  @Input() appValues: AppValues;
  @Output() next = new EventEmitter<AppValues>();
  @Output() resetValues = new EventEmitter<boolean>();

  constructor() {}

  showResults(): void {
    const appValuesCopy = this.appValues;
    const answersArray = this.appValues.answers;

    const result: string =
      answersArray[Math.floor(Math.random() * answersArray.length)];

    appValuesCopy.answer = result;

    this.next.emit(appValuesCopy);
  }

  doItAgain() {
    this.showResults();
  }

  onStartOver(): void {
    this.resetValues.emit(true);
  }

  ngOnInit(): void {
    this.showResults();
  }
}
