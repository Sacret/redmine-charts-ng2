import { Component } from '@angular/core';

import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
  selector: 'login',
  templateUrl: './app/components/login.html',
  directives: [MD_INPUT_DIRECTIVES]
})

export class LoginComponent { }