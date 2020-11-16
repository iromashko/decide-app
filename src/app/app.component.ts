import { Component, OnInit } from '@angular/core';
import answersValues from './utils/answers.json';

export interface AppValues {
  visiblePanel: 'one' | 'two' | 'three';
  question: string;
  mode: boolean;
  answers: string[];
  custom: string[];
  answer: string;
}

export interface Errors {
  show: boolean;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  errors: Errors = {
    show: false,
    message: null,
  };

  appValues: AppValues = {
    visiblePanel: 'one',
    question: '',
    mode: false,
    answers: answersValues.answers,
    custom: [],
    answer: null,
  };

  handleNext(values: AppValues): void {
    this.appValues = values;
  }

  handleErrors(values: Errors): void {
    const errorsCopy = this.errors;
    this.errors = {
      show: values.show,
      message: values.message,
    };
    setTimeout(() => {
      this.errors = errorsCopy;
    }, 2000);
  }

  ngOnInit(): void {
    console.log(answersValues.answers);
  }
}
