"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
//Criar Carros
var CarroA = new Carro_1.default('Maverick', 3);
var CarroB = new Carro_1.default('Landal', 3);
var CarroC = new Carro_1.default('Puma', 3);
//Mostar lista de carros
var listaDeCarros = [CarroA, CarroB, CarroC];
var concessionaria = new Concessionaria_1.default('Riviera Fluminense', listaDeCarros);
//console.log(concessionaria.mostrarListaDeCarros())
//Comprar o carro
var cliente = new Pessoa_1.default('João', 'Maverick');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQuetem());
