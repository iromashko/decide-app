import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppValues, Errors } from '../app.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  @Input() appValues: AppValues;
  @Output() next = new EventEmitter<AppValues>();
  @Output() hasErrors = new EventEmitter<Errors>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.appValues);
  }

  onAddQuestion(question: HTMLInputElement): void {
    const appValuesCopy = this.appValues;

    if (question.value !== '') {
      appValuesCopy.visiblePanel = 'two';
      appValuesCopy.question = question.value;
      this.next.emit(appValuesCopy);
    } else {
      this.hasErrors.emit({
        show: true,
        message: 'Sorry, you need to enter something',
      });
    }
  }
}
