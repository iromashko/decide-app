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
    if (this.validateResults()) {
      const appValuesCopy = this.appValues;
      appValuesCopy.visiblePanel = 'three';
      this.next.emit(appValuesCopy);
    } else {
      this.hasErrors.emit({
        show: true,
        message: 'You need at least two answers',
      });
    }
  }

  changeMode(): void {
    const appValuesCopy = this.appValues;
    appValuesCopy.mode = true;
    this.next.emit(appValuesCopy);
  }

  addCustom(custom): void {
    if (custom.value !== '') {
      const appValuesCopy = this.appValues;
      appValuesCopy.custom.push(custom.value);
      this.next.emit(appValuesCopy);
    } else {
      this.hasErrors.emit({
        show: true,
        message: 'The Field is empty',
      });
    }
  }

  validateResults() {
    if (this.appValues.mode) {
      if (this.appValues.custom.length > 1) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  }

  ngOnInit(): void {}
}
