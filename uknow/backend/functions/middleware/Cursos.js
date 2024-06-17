//---------- Cursos ---------
class Cursos
{
    #id;
    #nome;
    #autor;
    #tema;
    #descricao;
    #foto;
    #preco;
    #avaliacao;
    #conteudo;

    /**
     * Default constructor
     * 
     * @param {String} id 
     * @param {String} nome 
     * @param {String} autor 
     * @param {String} tema 
     * @param {String} descricao 
     * @param {String} foto 
     * @param {Number} preco 
     * @param {String[]} avaliacao 
     * @param {String[]} conteudo 
     */
    constructor(id, nome, autor, tema, descricao, foto, preco, avaliacao, conteudo)
    {
        this.#id = id;
        this.#nome = nome;
        this.#autor = autor;
        this.#tema = tema;
        this.#descricao = descricao;
        this.#foto = foto;
        this.#preco = preco;
        this.#avaliacao = avaliacao;
        this.#conteudo = conteudo;
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
     * Get Autor
     * 
     * @returns {String}
     */
    getAutor()
    { return(this.#autor); }
 
    /**
     * Set Autor
     * 
     * @param {String} autor 
     */
    setAutor(autor)
    { this.#autor = autor; } 

    /**
     * Get Tema
     * 
     * @returns {String}
     */
    getTema()
    { return(this.#tema); }
 
    /**`
     * Set Tema
     * 
     * @param {String} tema 
     */
    setTema(tema)
    { this.#tema = tema; }

    /**
     * Get Descricao
     * 
     * @returns {String}
     */
    getDescricao()
    { return(this.#descricao); }

    /**
     * Set Descricao
     * 
     * @param {String} descricao 
     */
    setDescricao(descricao)
    { this.#descricao = descricao; }
    
    /**
     * Get Foto
     * 
     * @returns {String}
     */
    getFoto()
    { return(this.#foto); }

    /**
     * Set Foto
     * 
     * @param {String} foto 
     */
    setFoto(foto)
    { this.#foto = foto; }

    /**
     * Get Preço
     * 
     * @returns {Number}
     */
    getPreco()
    { return(this.#preco); }

    /**
     * Set Preço
     * 
     * @param {Number} preco 
     */
    setPreco(preco)
    { this.#preco = preco; }

    /**
     * Get Avaliacao
     * 
     * @returns {String}
     */
    getAvalicao()
    { return(this.#avalicao); }

    /**
     * Set Avalicao
     * 
     * @param {String} avalicao 
     */
    setAvalicao(avalicao)
    { this.#avalicao = avalicao; }

    /**
     * Get Conteudo
     * 
     * @returns {String}
     */
    getConteudo()
    { return(this.#conteudo); }

    /**
     * Set Conteudo
     * 
     * @param {String} conteudo 
     */
    setConteudo(conteudo)
    { this.#conteudo = conteudo; }
}//end class


//---------- Exports ---------
module.exports = Cursos;