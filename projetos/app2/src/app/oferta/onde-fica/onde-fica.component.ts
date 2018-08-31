import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica:string = ''

  constructor(private ofertasService: OfertasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(
      (parametro: Params) => {

        this.ofertasService.getOndeficaOfertaPorId(parametro.id).subscribe(
          (descricao:string) => this.ondeFica = descricao
        )
        
      }
    )
  }

}
