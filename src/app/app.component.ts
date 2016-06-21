import { Component } from '@angular/core';

import { LoginComponent } from './components/login.component';
import { HeaderComponent } from './components/header.component';

@Component({
  selector: 'my-app',
  directives: [LoginComponent, HeaderComponent],
  template: '<header></header><h1>My Angular 2 App</h1><login></login>'
})

export class AppComponent { }