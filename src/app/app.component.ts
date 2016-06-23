import { Component } from '@angular/core';

import { LoginComponent } from './components/login.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'my-app',
  directives: [LoginComponent, HeaderComponent, FooterComponent],
  templateUrl: './app/app.html'
})

export class AppComponent { }
