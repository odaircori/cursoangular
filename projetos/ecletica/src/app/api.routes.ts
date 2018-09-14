import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { IncluirCervejariaComponent } from './home/incluir-cervejaria/incluir-cervejaria.component'

import { AutenticacaoGuard } from './autenticaca-guard.service'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'incluir-cervejaria', component: IncluirCervejariaComponent, canActivate: [ AutenticacaoGuard ] }
]