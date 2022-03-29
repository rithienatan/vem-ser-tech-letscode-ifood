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
const Cardapio = require("../MenuManagement/Cardapio");
const Bebida = require("../ItensManagement/Bebida");
const Prato = require("../ItensManagement/Prato");
const Carrinho = require("../CartManagement/Carrinho");


//---------- Class ----------
class Lojista extends Pessoa
{
    static contador = 0;

    #cardapio;
    #listaPedidos;

    constructor(nome, cpf_cnpj, telefone, cidade, bairro, rua, numero, complemento)
    {
        super(nome, cpf_cnpj, telefone, cidade, bairro, rua, numero, complemento);

        this.id = Lojista.incrementarId();
        this.#cardapio = new Cardapio(this.id);
        this.#listaPedidos = [];
    }//end constructor()

    //---------- get(s) and set(s) ---------
    /**
     * Get Cardapio
     * 
     * @returns {Cardapio}
     */
    getCardapio()
    { return(this.#cardapio); }

    /**
     * Set Cardapio
     * 
     * @param {Cardapio} cardapio 
     */
    setCardapio(cardapio)
    { this.#cardapio = cardapio; }

    /**
     * Get Lista Pedido
     * 
     * @returns {array}
     */
    getListaPedido()
    { return(this.#listaPedidos); }

    /**
     * Set Lista Pedido
     * 
     * @param {array} listaPedido 
     */
    setListaPedido(listaPedidos)
    { this.#listaPedidos = listaPedidos; }


    //---------- functions cardapio -----------
    /**
     * Adiciona item ao cardapio
     * 
     * @param {string} itemTipo 
     * @param {Bebida|Prato} item 
     */
    AdicionarItemAoCardapio(itemTipo, item)
    {
        if(itemTipo === "Bebida")
        {
            let tempListaBebida = this.#cardapio.getListaBebidas();
            tempListaBebida.push(item);
            this.#cardapio.setListaBebidas(tempListaBebida);
        }
        else if(itemTipo === "Prato")
        {  
            let tempListaPrato = this.#cardapio.getListaPratos();
            tempListaPrato.push(item);
            this.#cardapio.setListaPratos(tempListaPrato);
        }
        else
        { console.log(`O tipo ${itemTipo} não existe!`); }
    }//end AdicionarItemAoCardapio()

    /**
     * Remove item do cardapio
     * 
     * @param {string} itemTipo 
     * @param {string} nomeItem 
     */
    RemoverItemDoCardapio(itemTipo, nomeItem)
    {
        if(itemTipo === "Bebida")
        {  
            let tempListaBebida = this.#cardapio.getListaBebidas().filter(element => {
                return(element.getNome() !== nomeItem);
            });

            if(tempListaBebida.length === this.#cardapio.getListaBebidas().length)
            { console.log(`Item ${nomeItem} não encontrado!`); }
            else
            { 
                this.#cardapio.setListaBebidas(tempListaBebida);
                console.log(`O Item ${nomeItem} foi removido!`);
            }//end if
        }
        else if(itemTipo === "Prato")
        { 
            let tempListaPrato = this.#cardapio.getListaPratos().filter(element => {
                return(element.getNome() !== nomeItem);
            });

            if(tempListaPrato.length === this.#cardapio.getListaPratos().length)
            { console.log(`Item ${nomeItem} não encontrado!`); }
            else
            {
                this.#cardapio.setListaPratos(tempListaPrato);
                console.log(`O Item ${nomeItem} foi removido!`);
            }//end if
        }
        else
        { console.log(`O tipo ${itemTipo} não existe!`); }
    }//end RemoverItemDoCardapio()

    /**
     * Altera item do cardapio
     * 
     * @param {string} itemTipo 
     * @param {string} nomeItem 
     * @param {string} novoNome
     * @param {number} novoValor
     */
    AlterarItemDoCardapio(itemTipo, nomeItem, novoNome, novoValor)
    {  
        if(itemTipo === "Bebida")
        { 
            if((novoNome === null && novoValor === null) ||
                (novoNome === "" && novoValor === null) ||
                (novoNome === null && novoValor < 0) || 
                (novoNome === "" && novoValor < 0))
            { console.log(`Nome do item e valores errados!`); }
            else
            {
                let listaBebidaIndex = null;

                for(let i = 0; i < this.#cardapio.getListaBebidas().length; i++)
                {
                    if(this.#cardapio.getListaBebidas()[i].getNome() === nomeItem)
                    { listaBebidaIndex = i; i = this.#cardapio.getListaBebidas().length; }   
                }//end for

                if(listaBebidaIndex === null)
                { console.log(`Item ${nomeItem} não encontrado!`); }
                else
                {
                    this.#cardapio.getListaBebidas()[listaBebidaIndex].setNome(novoNome);
                    this.#cardapio.getListaBebidas()[listaBebidaIndex].setValor(novoValor);
                }//end if
            }//end if
        }
        else if(itemTipo === "Prato")
        { 
            if((novoNome === null && novoValor === null) ||
                (novoNome === "" && novoValor === null) ||
                (novoNome === null && novoValor < 0) || 
                (novoNome === "" && novoValor < 0))
            { console.log(`Nome do item e valores errados!`); }
            else
            {
                let listaPratoIndex = null;

                for(let i = 0; i < this.#cardapio.getListaPratos().length; i++)
                {
                    if(this.#cardapio.getListaPratos()[i].getNome() === nomeItem)
                    { listaPratoIndex = i; i = this.#cardapio.getListaPratos().length; }   
                }//end for

                if(listaPratoIndex === null)
                { console.log(`Item ${nomeItem} não encontrado!`); }
                else
                {
                    this.#cardapio.getListaBebidas()[listaPratoIndex].setNome(novoNome);
                    this.#cardapio.getListaBebidas()[listaPratoIndex].setValor(novoValor);
                }//end if
            }//end if
        }
        else
        { console.log(`O tipo ${itemTipo} não existe!`); }
    }//end AlterarItemDoCardapio()

    /**
     * Mostrar cadapio
     */
    MostrarCardapio()
    {
        console.log(`========== Cardapio do Lojista - id: ${this.id} ==========\n`);

        console.log("Bebida");
        if(this.#cardapio.getListaBebidas().length === 0)
        { console.log("Não há Bebidas Cadastradas!"); }
        else
        {
            this.#cardapio.getListaBebidas().forEach(element => {
                console.log(`Nome: ${element.getNome()} | Valor: ${element.getValor()}`);
            });
        }//end if

        console.log("\n");
    
        console.log("Prato");
        if(this.#cardapio.getListaPratos().length === 0)
        { console.log("Não há Pratos Cadastrados!"); }
        else
        {
            this.#cardapio.getListaPratos().forEach(element => {
                console.log(`Nome: ${element.getNome()} | Valor: ${element.getValor()}`);
            });
        }//end if
    }//end MostrarCardapio()


    //---------- functions pedidos -----------
    /**
     * Aceita pedido do cliente
     * 
     * @param {Object} clientePedido
     * 
     * @returns {boolean|object} 
     */
    AceitarPedido(clientePedido)
    {
        let answer = false;

        if(clientePedido.carrinho.getStatusPedido() === 1)
        {
            this.#listaPedidos.push(clientePedido);
            clientePedido.carrinho.setStatusPedido(2);
            console.log(`Logista com id ${this.id} aceitou o pedido do cliente nome: ${clientePedido.nome} com id: ${clientePedido.carrinho.id}.`);

            answer = clientePedido;
        }
        else
        { console.log(`Não foi possivel aceitar o pedido do cliente nome: ${clientePedido.nome} com id: ${clientePedido.carrinho.id}.`); }
        
        return(answer);
    }//end AceitarPedido()

    /**
     * Prepara pedido do cliente
     * 
     * @returns {boolean|object}
     */
    PrepararPedido()
    {
        let answer = false;

        if(this.#listaPedidos[0].carrinho.getStatusPedido() === 2)
        {
            this.#listaPedidos[0].carrinho.setStatusPedido(3);
            console.log(`Logista com id ${this.id} está preparando o pedido do cliente nome: ${this.#listaPedidos[0].nome} com id: ${this.#listaPedidos[0].carrinho.id}.`);

            answer = this.#listaPedidos[0];
        }
        else
        { console.log(`Não foi possivel preparar o pedido do cliente nome: ${this.#listaPedidos[0].nome} com id: ${this.#listaPedidos[0].carrinho.id}.`); }
        
        return(answer);
    }//end PrepararPedido()

    /**
     * Finaliza pedido do cliente
     * 
     * @returns {boolean|object}
     */
    TerminarPedido()
    {
        let answer = false;

        if(this.#listaPedidos[0].carrinho.getStatusPedido() === 3)
        {
            this.#listaPedidos[0].carrinho.setStatusPedido(4);
            console.log(`Logista com id ${this.id} terminou a preparação do pedido do cliente nome: ${this.#listaPedidos[0].nome} com id: ${this.#listaPedidos[0].carrinho.id}. Pedido a espera de um entregador!`);

            answer = this.#listaPedidos[0];
            this.#listaPedidos.shift();
        }
        else
        { console.log(`Não foi possivel preparar o pedido do cliente nome: ${this.#listaPedidos[0].nome} com id: ${this.#listaPedidos[0].carrinho.id}.`); }
        
        return(answer);
    }//end TerminarPedido()

    /**
     * Cancela pedido do cliente
     * 
     * @param {number} idPedido
     * 
     * @returns {object}
     */
    CancelarPedido(idPedido)     
    {
        let tempPedido = this.#listaPedidos.find(element => element.carrinho.id === idPedido);
        
        if(tempPedido !== undefined && (tempPedido.carrinho.getStatusPedido() === 2 || tempPedido.carrinho.getStatusPedido() === 3))
        {
            tempPedido.carrinho.setStatusPedido(0);

            let temp = this.#listaPedidos.filter(element => {              
                return(element.carrinho.id !== idPedido);         
            });   

            if(temp.length === this.#listaPedidos.length)         
            { console.log(`Pedido não encontrado!`); }         
            else         
            {                  
                this.setListaPedido(temp);                 
                console.log(`Pedido de id ${idPedido} cancelado`);         
            }//end if
        }
        else
        { console.log("Pedido não encontrado!"); }

        return(tempPedido);
    }//end CancelarPedido()

    /**
     * Atualiza lista de pedidos, após o cancelamento do cliente
     * 
     * @param {number} clienteId 
     */
    UpdateListaPedido(clienteId)
    {
        let tempList = this.#listaPedidos.filter(element => {
            return(element.carrinho.id !== clienteId);
        });

        this.setListaPedido(tempList);

        console.log("Lista de pedidos do lojista atualizada!");
    }//end UpdateListaPedido()


    //---------- Static functions ---------
    /**
     * Incrementa id staticamente
     * 
     * @returns {number}
     */
    static incrementarId()
    { return(++Lojista.contador); }
}//end class

//---------- exports ----------
module.exports = Lojista;