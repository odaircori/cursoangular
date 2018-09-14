import { CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { Autenticacao } from './autenticacao.service'


@Injectable()
export class AutenticaGuard implements CanActivate {

    constructor(public autenticacao: Autenticacao ){}

    canActivate() {
        return this.autenticacao.autenticado()

    }
}