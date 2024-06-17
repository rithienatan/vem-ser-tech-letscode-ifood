//---------- Custom Imports ----------
const Pessoa = require("./Pessoa");


//---------- Classes ----------
class Aluno extends Pessoa
{
    #carteira;

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
     */
    constructor(id, nome, idade, cpf, email, senha, carteira)
    {
        super(id, nome, idade, cpf, email, senha);

        this.#carteira = carteira;
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

    //---------- functions -----------
    /**
     * Mostra as informações do aluno
     * 
     * @returns {Object}
     */
    mostrar()
    {
        return({
            "id": this.getId(),
            "nome": this.getNome(),
            "idade": this.getIdade(),
            "cpf": this.getCpf(),
            "email": this.getEmail(),
            "senha": this.getSenha(),
            "carteira": this.getCarteira()
        });
    }//end mostrar()
}//end class


//---------- Exports -----------
module.exports = Aluno;