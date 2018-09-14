import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Autenticacao } from './autenticacao.service'
import { AutenticacaoGuard } from './autenticaca-guard.service'
import { ROUTES } from './api.routes';
import { IncluirCervejariaComponent } from './home/incluir-cervejaria/incluir-cervejaria.component'
import { CadastrarCervejaria } from './bd.service'
import { Progresso } from './progresso.service'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    FooterComponent,
    IncluirCervejariaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule
  ],
  providers: [ Autenticacao, AutenticacaoGuard, CadastrarCervejaria, Progresso ],
  bootstrap: [AppComponent]
})
export class AppModule { }
