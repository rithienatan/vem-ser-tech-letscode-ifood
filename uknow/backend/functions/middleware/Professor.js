//---------- Custom Imports ----------
const Pessoa = require("./Pessoa");


//---------- Classes ----------
class Professor extends Pessoa
{
    #carteira;
    #formacao;

    /**
     * Default Constructor
     * 
     * @param {String} id 
     * @param {String} nome 
     * @param {Number} idade 
     * @param {String} cpf 
     * @param {String} senha 
     * @param {String} email 
     * @param {Carteira} carteira
     * @param {String[]} formacao
     */
    constructor(id, nome, idade, cpf, senha, email, carteira, formacao)
    {
        super(id, nome, idade, cpf, senha, email);

        this.#carteira = carteira;
        this.#formacao = formacao;
    }//end constructor()

    //--------- get(s) and set(s) ---------
    /**
     * Get Carteira
     * 
     * @returns {Carteira}
     */
    getCarteira()
    { return(this.#carteira); }

    /**
     * Set Carteira
     * 
     * @param {Carteira} carteira 
     */
    setCarteira(carteira)
    { this.#carteira = carteira; }

    /**
     * Get Formação
     * 
     * @returns {String[]}
     */
    getFormacao()
    { return(this.#formacao); }

    /**
     * Set Formação
     * 
     * @param {String[]} formacao 
     */
    setFormacao(formacao)
    { this.#formacao = formacao}
}//end class


//---------- Exports -----------
module.exports = Professor;