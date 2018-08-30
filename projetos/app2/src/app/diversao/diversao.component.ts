import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'


@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  public diversao: Oferta[]

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria('diversao')
      .then((ofertas: Oferta[]) => {
          return this.diversao = ofertas
      })
  }

}
