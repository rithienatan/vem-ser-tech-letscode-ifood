/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Contato = require('./Contato.js');
const Agenda = require('./Agenda.js');


//---------- Runing Program ----------
function StaticMain()
{
    //Criando contatos
    let contato1 = new Contato('Eu', '99999-9999');
    let contato2 = new Contato('AAAA', '88888-8888');
    let contato3 = new Contato('BBBB', '77777-7777');

    //criando agenda
    let agenda = new Agenda();

    //inserindo contatos na agenda
    console.log('========== Inserindo contatos ===========');
    agenda.Incluir(contato1);
    agenda.Incluir(contato2);
    agenda.Incluir(contato3);

    //mostrar contatos na agenda
    console.log('\n========== Listando contatos ===========');
    agenda.Listar();

    //buscar contatos
    console.log('\n========== Buscando contatos ===========');
    console.log(agenda.BuscarPorNome('Eu'));
    console.log(agenda.BuscarPorNumero('88888-8888'));

    //removendo contatos
    console.log('\n========== Removendo contatos ===========');
    agenda.RemoverPorNome('AAAA');
    agenda.Listar();

    console.log('\n');

    agenda.RemoverPorNumero('77777-7777');
    agenda.Listar();
}//end StaticMain()

StaticMain();