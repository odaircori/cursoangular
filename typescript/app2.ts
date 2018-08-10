import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

//Criar Carros

let CarroA = new Carro('Maverick', 3)
let CarroB = new Carro('Landal', 3)
let CarroC = new Carro('Puma', 3)

//Mostar lista de carros

let listaDeCarros: Array<Carro> = [CarroA, CarroB, CarroC]

let concessionaria = new Concessionaria('Riviera Fluminense', listaDeCarros)

//console.log(concessionaria.mostrarListaDeCarros())

//Comprar o carro

let cliente = new Pessoa('João', 'Maverick')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {

    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQuetem())