/**
 * @author Rithie
 * @author Thatyara
 * @author Wesley
 * @author Flávius
 * 
 * @version 0.1.0
 */
//---------- Class ----------
class Pessoa
{
    #nome;
    #cpf_cnpj;
    #telefone;
    #cidade;
    #bairro;
    #rua;
    #numero;
    #complemento;

    /**
     * Default constructor
     * 
     * @param {string} nome 
     * @param {string} cpf_cnpj 
     * @param {string} telefone 
     * @param {string} cidade 
     * @param {string} bairro 
     * @param {string} rua
     * @param {number} numero 
     * @param {string} complemento 
     */
    constructor(nome, cpf_cnpj, telefone, cidade, bairro, rua, numero, complemento)
    {
        this.#nome = nome;
        this.#cpf_cnpj = cpf_cnpj;
        this.#telefone = telefone;
        this.#cidade = cidade;
        this.#bairro = bairro;
        this.#rua = rua;
        this.#numero = numero;
        this.#complemento = complemento;
    }//end constructor()

    //---------- get(s) and set(s) ---------
    /**
     * Get nome
     * 
     * @returns {string} 
     */
    getNome()
    { return(this.#nome); }

    /**
     * Set nome
     * 
     * @param {string} nome 
     */
    setNome(nome)
    { this.#nome = nome; }

    /**
     * Get CPF-CNPJ
     * 
     * @returns {string}
     */
    getCpfCnpj()
    { return(this.#cpf_cnpj); }

    /**
     * Set CPF-CNPJ 
     * 
     * @param {string} cpf_cnpj 
     */
    setCpfCnpj(cpf_cnpj)
    { this.#cpf_cnpj = cpf_cnpj; }

    /**
     * Get Telefone
     * 
     * @returns {string}
     */
    getTelefone()
    { return(this.#telefone); }

    /**
     * Set Telefone
     * 
     * @param {string} telefone 
     */
    setTelefone(telefone)
    { this.#telefone = telefone; }

    /**
     * Get Cidade
     * 
     * @returns {string}
     */
    getCidade()
    { return(this.#cidade); }

    /**
     * Set Cidade
     * 
     * @param {string} cidade 
     */
    setCidade(cidade)
    { this.#cidade = cidade; }

    /**
     * Get bairro
     * 
     * @returns {string}
     */
    getBairro()
    { return(this.#bairro); }

    /**
     * Set bairro
     * 
     * @param {string} bairro 
     */
    setBairro(bairro)
    { this.#bairro = bairro; }

    /**
     * Get Rua
     * 
     * @returns {string} 
     */
    getRua()
    { return(this.#rua); }

    /**
     * Set Rua
     * 
     * @param {string} rua 
     */
    setRua(rua)
    { this.#rua = rua; }

    /**
     * Get numero
     * 
     * @returns 
     */
    getNumero()
    { return(this.#numero); }

    /**
     * Set numero
     * 
     * @param {number} numero 
     */
    setNumero(numero)
    { this.#numero = numero; }

    /**
     * Get Complemento
     * 
     * @returns {string}
     */
    getComplemento()
    { return(this.#complemento); }

    /**
     * Set Complemento
     * 
     * @param {string} complemento 
     */
    setComplemento(complemento)
    { this.#complemento = complemento; }
}//end class

//---------- exports ----------
module.exports = Pessoa;