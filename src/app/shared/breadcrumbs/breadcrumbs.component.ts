import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string = '';

  constructor( private router: Router,
               public title: Title,
               public meta: Meta) {

                this.getData().subscribe(data => {
                  this.titulo = data.titulo;
                  this.title.setTitle(this.titulo);
                });


               }

  ngOnInit() {
  }


  getData() {

    return this.router.events
      .filter(evento => evento instanceof ActivationEnd)
      .filter((evento: ActivationEnd) => evento.snapshot.firstChild === null)
      .map((evento: ActivationEnd) => evento.snapshot.data);

  }
}
