/**
 * O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e 
 * dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os 
 * impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o 
 * custo final ao consumidor. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
/**
 * @author Rithie Natan
 * @date 04-03-2022
 * @version 0.1.0
 */
/**--------- Imports ---------**/
const prompt = require('prompt-sync')({sigint: true});


/**--------- Global Variables ---------**/
let custoInicial = null;


/**--------- Functions ----------**/
/**
 * Calcula o valor final do carro para o consumidor
 * 
 * @param {number} custoInicial - Custo inicial do carro informado pela fábrica
 * 
 * @returns {number} Custo final do carro
 */
const CustoFinal = (custoInicial) => (custoInicial + (custoInicial*0.28)) + (custoInicial + (custoInicial*0.45));

/**
 * Valida o input dos usuários
 * 
 * @param {number} custoInicial - Custo inicial do carro informado pela fábrica
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidUserInput(custoInicial)
{
    let answer = true;

    if(custoInicial === null || isNaN(custoInicial) === true || custoInicial < 0)
    { answer = false; }

    return(answer);
}//end ValidUserInput()


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("Entre com o valor do carro pelo custo de fábrica!");
    let infoInputUser = false;

    do
    {
        custoInicial = Number(prompt("Custo do carro: "));

        if(ValidUserInput(custoInicial) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoInputUser = true; }
    } while(infoInputUser === false);

    console.log("O custo do carro é: ", CustoFinal(custoInicial));
}//end StaticMain()

//StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};