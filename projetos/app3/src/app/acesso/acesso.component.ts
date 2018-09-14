import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({
          opacity:0, transform:'translate(-100px, 0)'
        }),
        animate('500ms 500ms ease-in-out')
      ])
    ]),
      trigger('animacao-login', [
        state('criado', style({
          opacity: 1
        })),
        transition('void => criado', [
          style({
            opacity:0, transform: 'translate(100px,0)'
          }),
          animate('1500ms 500ms ease-in-out', keyframes ([
            style({ 
              offset: 0.15, opacity: 1, transform: 'translateX(0)'
            }),
            style({ 
              offset: 0.86, opacity: 1, transform: 'translateX(0)'
            }),
            style({ 
              offset: 0.88, opacity: 1, transform: 'translateY(-10px)'
            }),
            style({ 
              offset: 0.90, opacity: 1, transform: 'translateY(10px)'
            }),
            style({ 
              offset: 0.92, opacity: 1, transform: 'translateY(-10px)'
            }),            
            style({ 
              offset: 0.96, opacity: 1, transform: 'translateY(10px)'
            }),     
            style({ 
              offset: 0.98, opacity: 1, transform: 'translateY(-10px)'
            }),                               
            style({ 
              offset: 1, opacity: 1, transform: 'translateY(0)'
            })            
          ])
          )
        ])
      ])
  ]
})
export class AcessoComponent implements OnInit {

  public estado:string = 'criado'

  public cadastro:boolean = false

  constructor() { }

  ngOnInit() {
  }

  public exibirPainel(evento:string): void {
    this.cadastro = evento ===  'cadastro' ? true : false
  }

}