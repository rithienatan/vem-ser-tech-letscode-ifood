/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- class ----------
class Pessoa
{
    /**
     * Constructor default
     * 
     * @param {string} nome 
     * @param {string} dataNascimento 
     */
    constructor(nome, dataNascimento)
    {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }//end constructor()

    /**
     * 
     * @param {string} dataNascimento - Data de Nascimento da pessoa
     * @returns {number}}  
     */
    CalcularIdade(dataNascimento)
    { 
        let idade = null;

        let nascimento = new Date(dataNascimento);
        let ano_nascimento = nascimento.getFullYear();
        let mes_nascimento = nascimento.getMonth() + 1;
        let dia_nascimento = nascimento.getDay();

        let data = new Date();
        let ano_atual = data.getFullYear();
        let mes_atual = data.getMonth() + 1;
        let dia_atual = data.getDay();


        idade = ano_atual - ano_nascimento;

        if(mes_atual < mes_nascimento || mes_atual === mes_nascimento && dia_atual < dia_nascimento)
        { idade--; }

        return(idade); 
    }//end CalcularIdade()

    /**
     * Printa os atributos pessoa
     */
    DetalharPessoa()
    { console.log(`${this.nome}, idade ${this.CalcularIdade(this.dataNascimento)}`); }
}//end class

//---------- exports ---------
module.exports = Pessoa;