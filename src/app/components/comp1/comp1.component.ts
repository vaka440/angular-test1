import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {
    this.data[1].name = 'tutu';
  }
}
