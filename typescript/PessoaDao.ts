import DaoInterface from './DaoInterface'
import Pessoa from './Pessoa'

export default class PessoaDao implements DaoInterface {
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Pessoa): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: Pessoa): boolean {
        console.log('lógica de update')
        return true
    }

    remover(id: number): Pessoa {
        console.log('lógica de delete')
        return new Pessoa('', '')
    }

    selecionar(id: number): Pessoa {
        console.log('lógica de delete')
        return new Pessoa('','')
    }

    selecionarTodos(): [Pessoa] {
        console.log('lógica de getAll')
        return [new Pessoa('','')]
    }
}