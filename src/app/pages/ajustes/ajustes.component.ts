import { Component, OnInit } from '@angular/core';
import { AjustesService } from '../../services/ajustes/ajustes.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styles: []
})
export class AjustesComponent implements OnInit {

  constructor(public _ajustesService: AjustesService) {
   }

  ngOnInit() {
    this.colorCheck();
  }

  cambiarColor(tema: string, link: any) {

    this._ajustesService.aplicarTema(tema);
    this.aplicarCheck(link);

  }
  aplicarCheck(link: any) {

    let selectores: any =  document.getElementsByClassName('selector');

    for (let ref of selectores) {
      ref.classList.remove('working');
     }
     link.classList.add('working');
  }

  colorCheck() {

    let selectores: any =  document.getElementsByClassName('selector');

    let tema = this._ajustesService.ajustes.tema;
    for (let ref of selectores) {
      if ( ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
     }

  }
}
