import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { CarrinhoService } from '../carrinho.service'

import { Oferta } from '../shared/oferta.model'



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public ofertaIndividual: Oferta

  constructor(private ofertaService: OfertasService, 
              private route: ActivatedRoute,
              private carrinhoService: CarrinhoService
            ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (parametros: Params) => {
        parametros.id

        this.ofertaService.getOferta(parametros.id).subscribe(
          (oferta: Oferta) => {
            this.ofertaIndividual = oferta
          } 
        )
        
        })        
      }


      public adicionaItemCarrinho(oferta:Oferta) {
        this.carrinhoService.incluirItem(oferta)
        console.log(this.carrinhoService.exibirItens())
      }

  }
