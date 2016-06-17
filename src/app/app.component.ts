import { Component } from '@angular/core';

import { LoginComponent } from './components/login.component';

@Component({
  selector: 'my-app',
  directives: [LoginComponent],
  template: '<h1>My Angular 2 App</h1><login></login>'
})

export class AppComponent { }