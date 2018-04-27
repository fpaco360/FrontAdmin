import { Component } from '@angular/core';
import { AjustesService } from './services/ajustes/ajustes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public _ajustes: AjustesService) {

  }
}
