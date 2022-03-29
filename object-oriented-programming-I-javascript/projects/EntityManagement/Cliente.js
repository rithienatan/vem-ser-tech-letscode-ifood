/**
 * @author Rithie
 * @author Thatyara
 * @author Wesley
 * @author Flávius
 * 
 * @version 0.1.0
 */
//---------- Imports ---------
const Pessoa = require("./Pessoa");
const Carrinho = require("../CartManagement/Carrinho");
const Produto = require("../CartManagement/Produto");


//---------- Class ----------
class Cliente extends Pessoa
{
    static contador = 0;

    #carrinho;

    constructor(nome, cpf_cnpj, telefone, cidade, bairro, rua, numero, complemento)
    {
        super(nome, cpf_cnpj, telefone, cidade, bairro, rua, numero, complemento);

        this.id = Cliente.incrementarId();
        this.#carrinho = new Carrinho(this.id);
    }//end constructor()

    //---------- get(s) and set(s) ---------
    /**
     * Get Carrinho
     * 
     * @returns {Carrinho}
     */
    getCarrinho()
    { return(this.#carrinho); }

    /**
     * Set Carrinho
     * 
     * @param {Carrinho} carrinho 
     */
    setCarrinho(carrinho)
    { this.#carrinho = carrinho; }


    //---------- functions cart ---------
    /**
     * Adiciona Item no carrinho
     * 
     * @param {Bebida|Prato} item 
     * @param {number} quantidade 
     */
    AdicionarItemNoCarrinho(item, quantidade)
    {
        let novoProduto = new Produto(item, quantidade);

        let listaCart = this.#carrinho.getListaProdutos();
        listaCart.push(novoProduto);
        this.#carrinho.setListaProdutos(listaCart);
    }//end AdicionarItem()

    /**
     * Altera a quantidade de um item especifico no carrinho
     * 
     * @param {string} nomeItem 
     * @param {number} novaQuantidade 
     */
    AlterarQuantidadeDeItemNoCarrinho(nomeItem, novaQuantidade)
    {
        if(novaQuantidade < 0)
        { console.log("Valor errado! Entre com um valor novamente!"); }
        else if(novaQuantidade === 0)
        { this.RemoverItemNoCarrinho(nomeItem); }
        else
        {
            let listaProdutoIndex = null;

            for(let i = 0; i < this.#carrinho.getListaProdutos().length; i++)
            {
                if(this.#carrinho.getListaProdutos()[i].getItem().getNome() === nomeItem)
                { listaProdutoIndex = i; i = this.#carrinho.getListaProdutos().length; }   
            }//end for

            if(listaProdutoIndex === null)
            { console.log(`Item ${nomeItem} não encontrado!`); }
            else
            { this.#carrinho.getListaProdutos()[listaProdutoIndex].setQuantidade(novaQuantidade); }
        }//end if
    }//end AlterarQuantidadeDeItemNoCarrinho()

    /**
     * Remove item do carrinho
     * 
     * @param {string} nomeItem 
     */
    RemoverItemNoCarrinho(nomeItem)
    {
        let tempListaCart = this.#carrinho.getListaProdutos().filter(element => {
            return(element.getItem().getNome() !== nomeItem);
        });

        if(tempListaCart.length === this.#carrinho.getListaProdutos().length)
        { console.log(`Item ${nomeItem} não encontrado!`); }
        else
        { 
            this.#carrinho.setListaProdutos(tempListaCart);
            console.log(`O Item ${nomeItem} foi removido!`);
        }//end if
    }//end RemoverItem
    
    /**
     * Mostrar itens no carrinho
     */
    MostrarCarrinho()
    {
        console.log(`========== Carrinho do Cliente - id: ${this.id} ==========\n`);

        if(this.#carrinho.getListaProdutos().length === 0)
        { console.log("Carrinho vazio!"); }
        else
        {
            this.#carrinho.getListaProdutos().forEach(element => {
                console.log(`Nome: ${element.getItem().getNome()} | Valor: ${element.getItem().getValor()} | Quantidade: ${element.getQuantidade()}`);
            });
        }//end if
    }//end MostrarCarrinho()


    //---------- functions pedidos e entrega ---------
    /**
     * Cliente realiza pedido
     * 
     * @returns {object|boolean} 
     */
    RealizarPedido()
    {
        let answer = false;
        
        if(this.#carrinho.getListaProdutos().length > 0)
        {
            this.#carrinho.setStatusPedido(1);
            console.log(`Cliente com id ${this.id} realizou pedido!`);

            answer = {
                nome: this.getNome(),
                telefone: this.getTelefone(),
                endereco: {
                    cidade: this.getCidade(),
                    bairro: this.getBairro(),
                    rua: this.getRua(),
                    numero: this.getNumero(),
                    complemento: this.getComplemento(),
                },
                carrinho: this.#carrinho
            };
        }//end if

        return(answer);
    }//end RealizarPedido()

    /**
     * Confirmar Entrega
     * 
     * @param {object} pedido 
     */
    ConfirmarEntrega(pedido)
    { 
        if(pedido.carrinho.id === this.#carrinho.id)
        {
            console.log(`O pedido ${pedido.carrinho.id} foi entregue! Contém os seguintes itens: `);
            this.MostrarCarrinho();
            
            this.#carrinho.setStatusPedido(0);
            this.#carrinho.setListaProdutos([]);
        }
        else
        { console.log(`Pedido entregue errado!`); }
    }//end ConfirmarEntrega()
    
    /**
     * Cancelar pedido
     * 
     * @param {number} statusPedido 
     * @returns {boolean|number}
     */
    CancelarPedido(statusPedido)
    {
        let answer = false;

        if(statusPedido <= 3)
        {
            this.#carrinho.setStatusPedido(0);
            answer = this.id;
            console.log(`Cliente ${this.getNome()} cancelou o pedido id ${this.id}.`);
        }
        else
        { console.log("O seu pedido não pode ser cancelado pois já está com o entregador!"); }

        return(answer);
    }//end CancelarPedido()


    //---------- Static functions ---------
    /**
     * Incrementa id staticamente
     * 
     * @returns {number}
     */
    static incrementarId()
    { return(++Cliente.contador); }
}//end class

//---------- exports ----------
module.exports = Cliente;