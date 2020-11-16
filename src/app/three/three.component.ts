import { Component, Input, OnInit } from '@angular/core';
import { AppValues } from '../app.component';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements OnInit {
  @Input() appValues: AppValues;

  constructor() {}

  ngOnInit(): void {}
}
