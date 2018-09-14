import { Component, OnInit } from '@angular/core';
import { CadastrarCervejaria } from '../bd.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public cervejarias: Array<any>

  constructor(public bd: CadastrarCervejaria) { }

  ngOnInit() {

    this.exibirCerveriasBanner()
  }

  public exibirCerveriasBanner() {
    this.bd.listaCervejarias()
    .then(
      (cervejarias: any) => {
        this.cervejarias= cervejarias

        console.log(this.cervejarias)
      }
    )
  }

}
