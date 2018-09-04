import { ItemCarrinho } from './shared/item-carrinho.model'
import { Oferta } from './shared/oferta.model'

export class CarrinhoService {
    public itens: ItemCarrinho[] = []

    public exibirItens(): ItemCarrinho[]{
        return this.itens
    }

    public incluirItem(oferta:Oferta){
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )

        //verificar se o item já existe no array the itens

        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        console.log(itemCarrinhoEncontrado)

        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade += 1
        }else {

            this.itens.push(itemCarrinho)
        }

    }

    public totalCarrinhoCompras(): number {
        
        let total = 0

        this.itens.map((item: ItemCarrinho) => {
            total = total + (item.valor * item.quantidade)
        })

        return total
    }


    public aumentaQuantidade(itemId: number): void {

        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemId)

        if(itemCarrinhoEncontrado){
            
            itemCarrinhoEncontrado.quantidade += 1
        }

    }


    public diminuiQuantidade(itemId: number): void {

        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemId)

        if(itemCarrinhoEncontrado){

            if(itemCarrinhoEncontrado.quantidade === 1){
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)

            }else{
                itemCarrinhoEncontrado.quantidade -= 1
            }
        }
    }    

}