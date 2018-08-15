import DaoInterface from './DaoInterface'

export default class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = ''

    inserir(object: T): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: T): boolean {
        console.log('lógica de update')
        return true
    }

    remover(id: number): T {
        console.log('lógica de delete')
        return Object()
    }

    selecionar(id: number): T {
        console.log('lógica de delete')
        return Object()
    }

    selecionarTodos(): [T] {
        console.log('lógica de getAll')
        return [Object()]
    }
}