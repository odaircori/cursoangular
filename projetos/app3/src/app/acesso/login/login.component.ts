import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'
import { Autenticacao } from '../../autenticacao.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public erroLogin = null

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(6)])
  })


  constructor(public auth: Autenticacao) { }

  ngOnInit() {

  }

 public exibirPainelCadastro(): void {
  this.exibirPainel.emit('cadastro')
 }

 public login(usuario: string, senha:string): void {

    this.auth.autenticar(this.formulario.value.email, this.formulario.value.senha)
      .then((resposta: any) =>{
        this.erroLogin = resposta
      })
 }

}
