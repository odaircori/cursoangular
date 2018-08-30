import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { ActivatedRoute } from '@angular/router'
import { Observable, Subject, of } from 'rxjs'
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'

import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})

export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  public pesquisa(termoDaBusca: string): void {
    console.log(termoDaBusca)
  this.subjectPesquisa.next(termoDaBusca)
}  

public limpaPesquisa(){
  this.subjectPesquisa.next('')
}

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((termo: string) => {
       
       if(termo.trim() === '') {
         return of<Oferta[]>([])
       }
       console.log(termo)
        return this.ofertasService.pesquisaOfertas(termo)
       
      }),
      catchError( (err: any) => {

        return of<Oferta[]>([])
      })
      
    )


  }



}
