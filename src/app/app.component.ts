import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  pageTitle: string = "Acme Product Maangement";
  name = 'Angular';
  age: number = 12;
}
