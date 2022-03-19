/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- class ----------
class Agenda
{
    /**
     * Default constructor
     */
    constructor()
    {
        this.lista = [];
    }//end constructor()

    /**
     * Inclui contato na lista
     * 
     * @param {object} contato - Novo contato 
     */
    Incluir(contato)
    { this.lista.push(contato); console.log('Contato Inserido!'); }

    /**
     * Remover contato identificado pelo nome
     * 
     * @param {string} nome - Nome contato 
     */
    RemoverPorNome(nome)
    {
        this.lista = this.lista.filter(element => element.nome !== nome);

        console.log('Contato Removido!')
    }//end RemoverPorNome()

    /**
     * Remover contato identificado pelo número
     * 
     * @param {string} numero - Número contato
     */
    RemoverPorNumero(numero)
    {
        this.lista = this.lista.filter(element => element.numero !== numero);

        console.log('Contato Removido!')
    }//end RemoverPorNumero()

    /**
     * Busca um contato pelo nome
     * 
     * @param {string} nome - Nome do contato
     * @returns {object} Contato
     */
    BuscarPorNome(nome)
    {
        let contato = this.lista.find(element => element.nome === nome);

        return contato;
    }//end BuscarPorNome()

    /**
     * Buscar um contato por número
     * 
     * @param {string} numero - Número do contato
     * @returns {object} Contato
     */
    BuscarPorNumero(numero)
    {
        let contato = this.lista.find(element => element.numero === numero);

        return contato; 
    }//end BuscarPorNumero()

    /**
     * Mostra todos os contatos cadastrados na agenda
     */
    Listar()
    { this.lista.forEach((element) => { console.log(element); }); }
}//end class

//---------- exports ---------
module.exports = Agenda;