import { Component, Input, OnInit } from '@angular/core';
import { AppValues } from '../app.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  @Input() appValues: AppValues;

  constructor() {}

  ngOnInit(): void {
    console.log(this.appValues);
  }
}
