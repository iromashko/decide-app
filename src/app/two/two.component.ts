import { Component, Input, OnInit } from '@angular/core';
import { AppValues } from '../app.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
  @Input() appValues: AppValues;

  constructor() {}

  ngOnInit(): void {}
}
