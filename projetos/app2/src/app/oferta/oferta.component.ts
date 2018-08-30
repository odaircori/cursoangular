import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public ofertaIndividual: Oferta

  constructor(private ofertaService: OfertasService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      (parametros: Params) => {
        parametros.id

        this.ofertaService.getOferta(parametros.id) 
        .then((ofertaIndividual: Oferta) => {
          this.ofertaIndividual = ofertaIndividual
        })        
      }



    )


  }
    
}
