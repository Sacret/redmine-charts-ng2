import { Component } from '@angular/core';

import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
  selector: 'login',
  templateUrl: './app/components/login.html',
  directives: [MATERIAL_DIRECTIVES, MdToolbar, MD_INPUT_DIRECTIVES, FORM_DIRECTIVES]
})

export class LoginComponent { }