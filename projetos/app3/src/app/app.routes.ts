import { Routes } from '@angular/router'

import { AcessoComponent } from './acesso/acesso.component'
import { HomeComponent } from './home/home.component'

import { AutenticaGuard } from './autenticacao-guard.service'

export const ROUTER: Routes = [
    {path: '', component: AcessoComponent},
    {path: 'home', component: HomeComponent, canActivate: [ AutenticaGuard ]}
]