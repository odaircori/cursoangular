import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'

import { CadastrarCervejaria } from '../../bd.service'
import { Progresso } from '../../progresso.service'
import { interval, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-incluir-cervejaria',
  templateUrl: './incluir-cervejaria.component.html',
  styleUrls: ['./incluir-cervejaria.component.css'],
  providers: [ CadastrarCervejaria, Progresso ]
})
export class IncluirCervejariaComponent implements OnInit {

  public imagem: any

  public progressoInclusao: string = "pendente"
  public porcentagem: number

  constructor(public cervejaria: CadastrarCervejaria, public progresso: Progresso, public router: Router ) { }

  ngOnInit() {
  }

  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null),
    'descricao': new FormControl(null),
    'endereco': new FormControl(null),
    'imagem': new FormControl(null)
  })

  public inserirCervejaria(): void{

    this.cervejaria.cadastrarCervejaria(
      this.formulario.value.titulo,
      this.formulario.value.descricao,
      this.formulario.value.endereco,
      this.imagem
    )

    let monitoraUpload = interval(1000)

    let continuaAte = new Subject()

    continuaAte.next(true)

    monitoraUpload
    .pipe(
      takeUntil(continuaAte)
    )
    .subscribe(
      (x) => {
        console.log(this.progresso.estado)
        console.log(this.progresso.status)

        this.progressoInclusao = 'andamento'

        this.porcentagem = (this.progresso.status.bytesTransferred / this.progresso.status.totalBytes) * 100

        console.log(this.porcentagem)

        if(this.progresso.estado === 'concluido'){

          this.progressoInclusao = 'concluido'
          continuaAte.next(false)

          setTimeout(() => {
            this.router.navigate(['home'])
            this.progressoInclusao = 'pendente'
          }, 1500)

        }
      }
    )
}


  public preparaImagemUpload(imagem: Event): any {

    this.imagem = (<HTMLInputElement>imagem.target).files[0]

  }

}
