import { Component } from '@angular/core';

import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon } from 'ng2-material';

@Component({
  selector: 'header',
  //styleUrls: ['./app/components/header.scss'],
  templateUrl: './app/components/header.html',
  directives: [MdToolbar, MdIcon]
})

export class HeaderComponent { }
