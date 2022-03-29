/**
 * @author Rithie
 * @author Thatyara
 * @author Wesley
 * @author Flávius
 * 
 * @version 0.1.0
 */
//---------- Class ----------
class Item
{
    #valor;
    #tipo;
    #nome;

    /**
     * Default constructor
     * 
     * @param {string} tipo
     * @param {string} nome
     * @param {number} valor
     */
    constructor(tipo, nome, valor)
    {
        this.#tipo = tipo;
        this.#nome = nome;
        this.#valor = valor;
    }//end constructor()

    //---------- get(s) and set(s) ---------
    /**
     * Get tipo
     * 
     * @returns {string}
     */
    getTipo()
    { return(this.#tipo); }

    /**
     * Set tipo
     * 
     * @param {number} tipo 
     */
    setTipo(tipo)
    { this.#tipo = tipo; }

    /**
     * Get Nome
     * 
     * @returns {string}
     */
    getNome()
    { return(this.#nome); }

    /**
     * Set Nome
     * 
     * @param {string} nome 
     */
    setNome(nome)
    { this.#nome = nome; }

    /**
     * Get valor
     * 
     * @returns {number}
     */
    getValor()
    { return(this.#valor); }

    /**
     * Set valor
     * 
     * @param {number} valor 
     */
    setValor(valor)
    { this.#valor = valor; }
}//end class

//---------- exports ----------
module.exports = Item;