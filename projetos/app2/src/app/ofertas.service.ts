import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { URL_API } from './app.api'
import { URL_API2 } from './app.api'
import { URL_API3 } from './app.api'
import { Observable } from 'rxjs'
import { map, retry } from 'rxjs/operators'


//import 'node_modules/rxjs/add/operator/toPromise'

const toPromise = obs =>
  new Promise((resolve, reject) => {
    obs.subscribe({
      complete: resolve,
      error: reject
    });
  });

@Injectable()

export class OfertasService {

    constructor(private http: Http){}

  public getOfertas(): Observable<Oferta[]> {
    return this.http.get(`${URL_API}?destaque=true`)
    .pipe(
      map((resposta:Response) =>  resposta.json())
    )
  }

    public getOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
      
      return this.http.get(`${URL_API}?categoria=${categoria}`)
        .pipe(
          map((resposta: Response) => resposta.json())
        )
    }

    public getOferta(id: number): Observable<Oferta>{

      return this.http.get(`${URL_API}?id=${id}`)
       .pipe(
         map((oferta: Response) => oferta.json().shift())
       )
    }

    public getComoUsarOfertaPorId(id: number): Observable<string> {
      return this.http.get(`${URL_API2}?id=${id}`)
        .pipe(
          map((resposta: Response) => resposta.json().shift().descricao))
    }

    public getOndeficaOfertaPorId(id: number): Observable<string> {
      return this.http.get(`${URL_API3}?id=${id}`)
        .pipe(
          map((resposta: Response) => resposta.json().shift().descricao)
        )
    }
  
    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
      return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`)
        .pipe(
          map((resposta: Response) => resposta.json()),
          retry(3)
        )
        
    }


}