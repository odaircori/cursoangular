import { Injectable } from '@angular/core'
import { Pedido } from './shared/pedido.model'
import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs'
import { URL_API_ROOT } from './app.api'
import { map } from 'rxjs/operators'

@Injectable()

export class OrdemCompraService {

    constructor(private http: Http){}

    public efetivarCompra(pedido: Pedido): Observable<any> {
        let headers: Headers = new Headers() 

        headers.append('Content-type', 'application/json')

        return this.http.post(
                `${URL_API_ROOT}/pedidos`, 
                JSON.stringify(pedido),
                new RequestOptions({ headers: headers})
            )
        .pipe(
            map((resposta: Response) => resposta.json()
            )
        )
        
    }
}