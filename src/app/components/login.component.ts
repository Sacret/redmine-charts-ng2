import { Component } from '@angular/core';

import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  selector: 'login',
  templateUrl: './app/components/login.html',
  directives: [MD_INPUT_DIRECTIVES, MdToolbar]
})

export class LoginComponent { }
