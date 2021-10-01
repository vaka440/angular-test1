import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-test1';

  data = [
    {
      name: 'toto1',
    },
    {
      name: 'toto2',
    },
  ];

  @ViewChild('createUserBtn', { static: true }) button: any;

  ngOnInit() {
    console.log(this.button);
  }
}
