import { Component, OnInit } from '@angular/core'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Observable, Subject } from 'rxjs'
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private ofertasSubscription: Subject<Oferta[]> = new Subject<Oferta[]>()

  constructor(private ofertasService: OfertasService) { 
  }

  public subOfertas(): void {
    console.log('passou aqui')
    this.ofertasSubscription.next()
  }

  ngOnInit() {

    this.ofertas = this.ofertasSubscription
    .pipe(
      switchMap(
        () => { 
          console.log( this.ofertasService.getOfertas())
          return this.ofertas =  this.ofertasService.getOfertas()
          
        }
      )
    )

    
/*
      .then(
        ( ofertas: Oferta[]) => {
          this.ofertas = ofertas
        }
      )

      .catch(
        ( param: any) => { console.log(param) }
      )
*/
  }

}