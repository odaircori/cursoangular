import { Cervejaria } from './shared/cervejaria.model'
import { Injectable } from '@angular/core'
import { Progresso } from './progresso.service'

import * as firebase from 'firebase'

@Injectable()

export class CadastrarCervejaria {

    constructor(public progresso: Progresso) {}

    public cadastrarCervejaria(titulo: string, descricao: string, endereco: string, imagem: string): void {

        let cervejaria: Cervejaria = {
            titulo,
            descricao,
            endereco,
            imagem
        }

        firebase.database().ref(`cervejarias/${titulo}`)
        .push(cervejaria)
        .then(
            (resposta: any) => {
                
                let nomeImagem = resposta.key

                firebase.storage().ref()
                    .child(`cervejarias/${titulo}/${nomeImagem}`)
                    .put(imagem)
                    .on(firebase.storage.TaskEvent.STATE_CHANGED,
                        (snapshot: any) => {
                            console.log(snapshot)

                            this.progresso.estado = 'andamento'
                            this.progresso.status = snapshot
                        },
                    
                        (error: Error) => {
                            console.log(error)
                        },
                        () => {
                            console.log('Upload realizado com sucesso')
                            this.progresso.estado = 'concluido'
                    })
                
                })
    }


    public listaCervejarias(): Promise<any> {

        return new Promise((resolve, reject) => { 
            firebase.database().ref('cervejarias')
            .once('value')
            .then(
                (snapshot: any) => {

                    let cervejarias: Array<any> = []

                    snapshot.forEach(childSnapshot => {

                        childSnapshot.forEach(
                        
                            (childSnapshot2: any) => {

                                
                        let cervejaria = childSnapshot2.val()
                        cervejaria.key = childSnapshot2.key

                        //console.log(childSnapshot2.val())
                        
                        cervejarias.push(cervejaria)

                            }
                        )                  
                    });

                   return cervejarias
                    
                })
            .then (
                (cervejarias: any) => {
                                
                    cervejarias.forEach(
                        (cervejaria) =>{

                            firebase.storage().ref()
                            .child(`cervejarias/${cervejaria.titulo}/${cervejaria.key}`)
                            .getDownloadURL()
                            .then(
                                (resposta: any) => {

                                    cervejaria.url_imagem = resposta
                                    
                                })
                            
                        })   
                        resolve(cervejarias)              
                })
                
            })
            
        
    }
}