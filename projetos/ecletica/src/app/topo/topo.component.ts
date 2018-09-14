import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Autenticacao } from '../autenticacao.service'
import { Router } from '@angular/router'
import { interval, Subject } from 'rxjs'

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ NgbModalConfig, NgbModal ]
})
export class TopoComponent implements OnInit {

  public email: string
  public senha: string

  public token
  public exibirCadastros: boolean
  
  constructor(public auth: Autenticacao, 
              config: NgbModalConfig, 
              private modalService: NgbModal,
              public router: Router ) {
    config.backdrop = 'static'
    config.keyboard = false
   }

  ngOnInit() {

    if(localStorage.getItem('idToken')){
      this.exibirCadastros = true
    }
 
  }

  open(content) {
    this.modalService.open(content);
  }

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })

  public login(){

    this.email = this.formulario.value.email
    this.senha = this.formulario.value.senha
    
    this.auth.efetuarLogin(this.email, this.senha)
    .then(
      () => {
        //this.closeModal = false
        console.log('Login Efetuado com sucesso')
        this.modalService.dismissAll()

        let exibeCadastros = interval(100)

        let stopInterval = new Subject()

        stopInterval.next(true)

        exibeCadastros
        .pipe(
          takeUntil(stopInterval)
        ).subscribe(
          (x) => {

            if(localStorage.getItem('idToken')){
              this.exibirCadastros = true
              stopInterval.next(false)
            }
          })
      })
    .catch((error: Error) => {
        console.log(error)
      })
  }  

  public logOut(): void {
    
    this.auth.logOut()
  }

}
