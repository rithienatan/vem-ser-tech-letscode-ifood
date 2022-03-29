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


//---------- Class ----------
class Entregador extends Pessoa
{
    static contador = 0;

    #veiculo;
    #listaDePedidos;

    constructor(nome, cpf_cnpj, telefone, cidade, bairro, rua, numero, complemento, veiculo)
    {
        super(nome, cpf_cnpj, telefone, cidade, bairro, rua, numero, complemento);

        this.id = Entregador.incrementarId();
        this.#veiculo = veiculo;
        this.#listaDePedidos = [];
    }//end constructor()

    //---------- get(s) and set(s) ---------
    /**
     * Get Veiculo
     * 
     * @returns {string}
     */
    getVeiculo()
    { return(this.#veiculo); }

    /**
     * Set Veiculo
     * 
     * @param {string} veiculo 
     */
    setVeiculo(veiculo)
    { this.#veiculo = veiculo; }

    /**
     * Get lista de pedidos
     * 
     * @returns {array}
     */
    getListaDePedidos()
    { return(this.#listaDePedidos); }

    /**
     * Set lista de pedidos
     * 
     * @param {array} listaDePedidos 
     */
    setListaDePedidos(listaDePedidos)
    { this.#listaDePedidos = listaDePedidos; }


    //---------- function pedidos ---------
    /**
     * Coleta pedido do cliente
     * 
     * @param {object} pedido 
     * @returns {boolean|object}
     */
    ColetarPedido(pedido)
    {
        let answer = false;

        if(this.getListaDePedidos().length < 5)
        { 
            if(pedido.carrinho.getStatusPedido() === 4)
            {
                pedido.carrinho.setStatusPedido(5);
                this.#listaDePedidos.push(pedido);
                answer = pedido;
                console.log(`Entregador ${this.getNome()} coletou o pedido do cliente ${pedido.nome} com id ${pedido.carrinho.id}.`);
            }
            else
            { console.log(`Não foi possivel coletar o pedido do cliente nome: ${pedido.nome} com id: ${pedido.carrinho.id}.`); }
        }
        else
        { console.log(`Entregador ${this.getNome()} está com a lista de pedidos cheia.`); }

        return(answer);
    }//end MarcarPedido()

    /**
     * Entrega pedido para o cliente
     * 
     * @returns {boolean|object}
     */
    EntregarPedido()
    {
        let answer = false;

        if(this.#listaDePedidos[0].carrinho.getStatusPedido() === 5)
        {
            answer = this.#listaDePedidos[0];
            console.log(`Entregador ${this.getNome()} entregou o pedido ao cliente ${this.#listaDePedidos[0].nome} com id ${this.#listaDePedidos[0].carrinho.id}.`);

            this.#listaDePedidos.shift();
        }
        else
        { console.log(`Entregador ${this.getNome()} não está apto a entregar o pedido ${this.#listaDePedidos[0].carrinho.id}.`); }


        return(answer);
    }//end EntregarPedido()

    /**
     * Visualizar Pedidos
     */
    VisualizarPedidos()
    {
        console.log(`========== Visualizar Pedidos Coletados - id: ${this.id} ==========\n`);

        if(this.getListaDePedidos().length > 0)
        {
            this.#listaDePedidos.forEach(element => {
                console.log(`Pedido ${element.carrinho.id} - para o cliente ${element.nome}!`);
            });
        }
        else
        { console.log("Lista de pedidos vazia!"); }
    }//end VisualizarPedidos()


    //---------- Static functions ---------
    /**
     * Incrementa id staticamente
     * 
     * @returns {number}
     */
    static incrementarId()
    { return(++Entregador.contador); }
}//end class

//---------- exports ----------
module.exports = Entregador;