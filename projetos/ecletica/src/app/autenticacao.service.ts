import * as firebase from 'firebase'
import { Injectable, Component } from '@angular/core'
import { Router } from '@angular/router'


@Injectable()
export class Autenticacao {

    public token: string

    constructor(public router: Router){}

    public efetuarLogin(email: string, senha: string): Promise<any>{

       return firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(
                (resposta: any) => {

                    firebase.auth().currentUser.getIdToken()
                    .then(
                        (token:string) => {

                            localStorage.setItem('idToken', token)

                            this.token = token

                        })                    

                })
            .catch((error: Error) => console.log(error))
            
    }

    public logOut(): void{

        firebase.auth().signOut()
        .then(
            () => {
                
                localStorage.removeItem('idToken')

                console.log('Logout Efetuado')
                this.router.navigate(['home'])
            }
        )

    }

    public autenticado(): boolean {


        if(localStorage.getItem('idToken') !== null){

            return true
        }
             return false
    }
}