import Moto from './Moto'
import Carro from './Carro'
import Concessionaria from './Concessionaria'

let carro = new Carro('Maverick', 3)
carro.acelerar()

let moto = new Moto()
moto.acelerar()

let concessionariainterface = new Concessionaria('',[])

console.log(moto)

console.log(carro)

console.log(concessionariainterface.fornecerHorarioDeFuncionamento())

