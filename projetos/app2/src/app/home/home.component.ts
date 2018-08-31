import { Component, OnInit } from '@angular/core'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Observable, Subject } from 'rxjs'
import { switchMap, map } from 'rxjs/operators'
import { Response } from '@angular/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]
 
  constructor(private ofertasService: OfertasService) { 
  }

  ngOnInit() {

    this.ofertasService.getOfertas().subscribe(
      (ofertas:Oferta[]) => {
        this.ofertas = ofertas
      }
  

  }

}
