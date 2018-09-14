import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Usuario } from '../usuario.model'
import { Autenticacao } from '../../autenticacao.service'
import * as firebase from 'firebase'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {


@Output() public exibirLogin: EventEmitter<string> = new EventEmitter<string>()

  public botaoInativo:boolean = true

  public usuarioExistente: boolean = false

  constructor(public auth: Autenticacao) { }

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'nome_completo': new FormControl(null, [Validators.required]),
    'nome_usuario': new FormControl(null, [Validators.required]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    'senha_confirmacao': new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  ngOnInit() {
  }

  public exibirPainelLogin(): void {
    this.exibirLogin.emit('login')
  }


  public habilitaBotao(): any {

    if(this.formulario.get('email').valid 
        && this.formulario.get('nome_completo').valid 
        && this.formulario.get('nome_usuario').valid 
        && this.formulario.get('senha').valid
        && this.formulario.get('senha_confirmacao').valid
        && this.formulario.value.senha === this.formulario.value.senha_confirmacao){
            this.botaoInativo = false
        }else{
          this.botaoInativo = true
        }
  }

  public cadastrarUsuario(): void {

    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )

    firebase.auth().fetchProvidersForEmail(usuario.email)
    .then(
      (resposta: any) => {

      if(resposta.length === 1){
          this.usuarioExistente = true
      }else{
          console.log('Cadastro realizado com sucesso')

          this.auth.cadastrarUsuario(usuario)
          .then(() => this.exibirPainelLogin())
      }


    })
  }
}
