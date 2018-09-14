import { Component, OnInit, ViewChild } from '@angular/core';
import { Autenticacao } from '../autenticacao.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('publicacoes') public publicacoes: any

  constructor(private auth: Autenticacao) { }

  ngOnInit() {
  }

  public sair(): void {
    this.auth.sair()
  }

  public atualizarTimeLine(): void {
    console.log('chegamos até aqui')
    this.publicacoes.atualizarTimeLine()
  }

}
