import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import * as firebase from 'firebase'

import { Bd } from '../../bd.service'
import { Progresso } from '../../progresso.service'

import { Observable, Subject, interval } from 'rxjs'
import { map, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public email: string
  private imagem: any

  public progressoPublicacao: string = 'pendente'
  public porcentagemUpload: number

  @Output() public atualizaTimeLine: EventEmitter<any> = new EventEmitter()

  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  })

  constructor(
      private bd: Bd,
      public progresso: Progresso
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }

  public publicar(): void {
    //console.log(this.formulario.value.titulo)
    this.bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem
    })

    let acompanhaUpload = interval(1500)

    let continua = new Subject()

    continua.next(true)

    acompanhaUpload
    .pipe(
      takeUntil(continua)
    )
    .subscribe(
      (x) => {

        console.log(this.progresso.status)
        console.log(this.progresso.estado)          

        this.porcentagemUpload = 
          (this.progresso.estado.bytesTransferred 
              / this.progresso.estado.totalBytes)
              * 100
          
        this.progressoPublicacao = 'andamento'

        if(this.progresso.status === 'concluido'){
          this.progressoPublicacao = 'concluido'

          this.atualizaTimeLine.emit()

          continua.next(false)
        }
      }
    )
      

   
    
  }

  public preparaImagemUpload(imagem: Event): any {

    this.imagem = (<HTMLInputElement>imagem.target).files[0]
  }

}
