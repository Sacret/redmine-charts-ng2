import { Component } from '@angular/core';

import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon } from 'ng2-material';

@Component({
  selector: 'footer',
  templateUrl: './app/components/footer.html',
  directives: [MdToolbar, MdIcon]
})

export class FooterComponent { }
