/**
 * @author Rithie Natan
 * @date 02-28-2022
 * @version 0.1.0
 */
/**--------- Imports ---------**/
const prompt = require('prompt-sync')({sigint: true});


/**--------- Global Variables ---------**/
const checkList = {
    "nomeMotorista": null,
    "matriculaMotorista": null,

    "placaDoCarro": null,
    "modelo": null,
    "ano": null,
    "km": null,

    "estadoDoPneu": null,
    "latariaDoCarro": null,
    "farois": null,
    "nivelDeCombustivel": null
};


/**--------- Functions ----------**/
/**
 * Valid user personal information.
 * 
 * @param {string} nomeMotorista - Nome do Motorista
 * @param {string} matriculaMotorista - Matricula do Motorista
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidacaoInfoMotorista(nomeMotorista, matriculaMotorista)
{
    let answer = true;

    if(nomeMotorista === null || nomeMotorista === "" || matriculaMotorista === null || matriculaMotorista === "")
    { answer = false; }

    return(answer);
}//end Validacao()

/**
 * Valid car information.
 * 
 * @param {string} placaDoCarro - Placa do Carro 
 * @param {number} km - KM rodados
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidacaoInfoCarro(placaDoCarro, km)
{
    let answer = true;

    if(placaDoCarro === null || placaDoCarro === "" || km === "" || km === null || isNaN(Number(km)) === true || Number(km) < 0)
    { answer = false; }

    return(answer);
}//end ValidacaoInfoCarro()

/**
 * Valid car state information
 * 
 * @param {number} estadoDoPneu - Estado do Pneu
 * @param {number} latariaDoCarro - Lataria do Carro
 * @param {number} farois - Faróis
 * @param {number} nivelDeCombustivel - Nível do Combustível
 * 
 * @returns {boolean} True or False for indicate, state validation
 */
function ValidacaoStateCarro(estadoDoPneu, latariaDoCarro, farois, nivelDeCombustivel)
{
    let answer = true;

    if(estadoDoPneu === null || isNaN(estadoDoPneu) === true || estadoDoPneu < 0 || estadoDoPneu > 1 ||
        latariaDoCarro === null || isNaN(latariaDoCarro) === true || latariaDoCarro < 0 || latariaDoCarro > 1 ||
        farois === null || isNaN(farois) === true || farois < 0 || farois > 1 ||
        nivelDeCombustivel === null || isNaN(nivelDeCombustivel) === true || nivelDeCombustivel < 0 || nivelDeCombustivel > 1)
    { answer = false; }

    return(answer);
}//end ValidacaoStateCarro()

/**
 * Aciona o Lider
 */
function AcionarLiderSMS()
{ console.log("Lider acionado! - Veículo com defeito!"); }

/**
 * Autooriza a saida do carro
 */
function PortariaAutorizar()
{ console.log("Carro em boas condições! - Saída Autorizada!"); }


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("---------- Checklist - Frota de Veículos ----------");

    console.log("Entre com o seu Nome e sua Matrícula: ");
    let infoMotoristaValid = false;

    do
    {
        checkList.nomeMotorista = prompt('Nome: ');
        checkList.matriculaMotorista = prompt('Matrícula: ');

        if(ValidacaoInfoMotorista(checkList.nomeMotorista, checkList.matriculaMotorista) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoMotoristaValid = true; }
    } while(infoMotoristaValid === false);


    console.log("\nEntre com a Placa e a Kilometragem do carro:");
    let infoCarroValid = false;

    do
    {
        checkList.placaDoCarro = prompt('Placa Do Carro: ');
        checkList.km = Number(prompt('KM: '));

        if(ValidacaoInfoCarro(checkList.placaDoCarro, checkList.km) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoCarroValid = true; }
    } while(infoCarroValid === false);

    console.log("\n---------- Entre com as informações de estado do carro! ---------");
    let infoStateCarro = false;

    do
    {
        console.log("Digite 1 para estado OK ou digite 0 para sinalizar defeito!");

        checkList.estadoDoPneu = Number(prompt('Estado do Pneu: '));
        checkList.latariaDoCarro = Number(prompt('Lataria do Carro: '));
        checkList.farois = Number(prompt('Faróis: '));
        checkList.nivelDeCombustivel = Number(prompt('Nível de Combustível: '));

        if(ValidacaoStateCarro(checkList.estadoDoPneu, checkList.latariaDoCarro, checkList.farois, checkList.nivelDeCombustivel) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoStateCarro = true; }
    } while(infoStateCarro === false);


    if(checkList.estadoDoPneu === 0 || checkList.latariaDoCarro === 0 || 
        checkList.farois === 0 || checkList.nivelDeCombustivel === 0)
    { AcionarLiderSMS(); }
    else
    { PortariaAutorizar(); }
}//end staticMain()

StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidacaoInfoMotorista,
    ValidacaoInfoCarro,
    ValidacaoStateCarro,
};