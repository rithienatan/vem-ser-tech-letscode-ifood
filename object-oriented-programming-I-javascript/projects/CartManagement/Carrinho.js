/**
 * @author Rithie
 * @author Thatyara
 * @author Wesley
 * @author Flávius
 * 
 * @version 0.1.0
 */
//---------- Class ----------
class Carrinho
{
    #listaProdutos;
    #statusPedido;
    //statusPedido = 0 -> Significa que o cliente ainda não realizou o pedido
    //statusPedido = 1 -> Cliente realizou o pedido
    //statusPedido = 2 -> Lojista aceitou o pedido
    //statusPedido = 3 -> Lojista terminou o pedido e está a espera do entregador
    //statusPedido = 4 -> Entregador está a caminho da coleta do pedido
    //statusPedido = 5 -> Entregador retirou o pedido e está a caminho do cliente
    //statusPedido = 6 -> Pedido recebido pelo cliente
    
    /**
     * Default constructor
     * 
     * @param {number} id 
     */
    constructor(id)
    { 
        this.id = id;
        this.#statusPedido = 0;
        this.#listaProdutos = []; 
    }//end constructor()

    //---------- get(s) and set(s) ---------
    /**
     * Get status pedido
     * 
     * @returns {number}
     */
    getStatusPedido()
    { return(this.#statusPedido); }
    
    /**
     * Set status pedido
     * 
     * @param {number} statusPedido 
     */
    setStatusPedido(statusPedido)
    { this.#statusPedido = statusPedido; }

    /**
     * Get listaProdutos
     * 
     * @returns {array}
     */
    getListaProdutos()
    { return(this.#listaProdutos); }

    /**
     * Set listaProdutos
     * 
     * @param {array} listaProdutos
     */
    setListaProdutos(listaProdutos)
    { this.#listaProdutos = listaProdutos; }
}//end class

//---------- exports ----------
module.exports = Carrinho;