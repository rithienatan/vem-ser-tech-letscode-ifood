//---------- Pessoa ---------
class Pessoa
{
    #id;
    #nome;
    #idade;
    #cpf;
    #senha;
    #email;

    /**
     * Default Constructor
     * 
     * @param {String} id 
     * @param {String} nome 
     * @param {Number} idade 
     * @param {String} cpf 
     * @param {String} email 
     * @param {String} senha 
     */
    constructor(id, nome, idade, cpf, email, senha)
    {
        this.#id = id;
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
        this.#email = email;
        this.#senha = senha;
    }//end constructor()


    //---------- get(s) and set(s) ----------
    /**
     * Get Id
     * 
     * @returns {String} 
     */
    getId()
    { return(this.#id); }

    /**
     * Get Nome
     * 
     * @returns {String}
     */
    getNome()
    { return(this.#nome); }

    /**
     * Set Nome
     * 
     * @param {String} nome 
     */
    setNome(nome)
    { this.#nome = nome; }

    /**
     * Get Idade
     * 
     * @returns {Number}
     */
    getIdade()
    { return(this.#idade); }

    /**
     * Set Idade
     * 
     * @param {Number} idade 
     */
    setIdade(idade)
    { this.#idade = idade; }

    /**
     * Get Cpf
     * 
     * @returns {String}
     */
    getCpf()
    { return(this.#cpf); }

    /**
     * Set Cpf
     * 
     * @param {String} cpf 
     */
    setCpf(cpf)
    { this.#cpf = cpf; }

    /**
     * Get Senha
     * 
     * @returns {String}
     */
    getSenha()
    { return(this.#senha); }

    /**`
     * Set Senha
     * 
     * @param {String} senha 
     */
    setSenha(senha)
    { this.#senha = senha; }

    /**
     * Get Email
     * 
     * @returns {String}
     */
    getEmail()
    { return(this.#email); }

    /**
     * Set Email
     * 
     * @param {String} email 
     */
    setEmail(email)
    { this.#email = email; }
}//end class


//---------- Exports ---------
module.exports = Pessoa;