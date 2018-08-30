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

    /*
    public getOfertas(): Promise<Oferta[]> {
        
        return this.http.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: Response) =>  resposta.json() )

    }

  */

  public getOfertas(): Observable<Oferta[]> {
    return this.http.get(`${URL_API}?destaque=true`)
    .pipe(
      map((resposta:Response) => resposta.json())
    )
  }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
      
      return this.http.get(`${URL_API}?categoria=${categoria}`)
        .toPromise()
        .then((resposta: Response) => resposta.json())

    }

    public getOferta(id: number): Promise<Oferta>{

      return this.http.get(`${URL_API}?id=${id}`)
        .toPromise()
        .then((resposta: Response) => resposta.json().shift())
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
      return this.http.get(`${URL_API2}?id=${id}`)
        .toPromise()
        .then((resposta: Response) => resposta.json().shift().descricao)
    }

    public getOndeficaOfertaPorId(id: number): Promise<string> {
      return this.http.get(`${URL_API3}?id=${id}`)
        .toPromise()
        .then((resposta: Response) => resposta.json().shift().descricao)
    }
  
    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
      return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`)
        .pipe(
          map((resposta: Response) => resposta.json()),
          retry(3)
        )
        
    }


}