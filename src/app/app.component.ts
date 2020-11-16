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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appValues: AppValues = {
    visiblePanel: 'one',
    question: '',
    mode: false,
    answers: answersValues.answers,
    custom: [],
    answer: null,
  };

  ngOnInit(): void {
    console.log(answersValues.answers);
  }
}
