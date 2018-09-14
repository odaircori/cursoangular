import { Autenticacao } from './autenticacao.service'
import { Injectable } from '@angular/core'

@Injectable()

export class AutenticacaoGuard {

    constructor (public auth: Autenticacao){ }

    public canActivate(): boolean {

        return this.auth.autenticado()

    }

}