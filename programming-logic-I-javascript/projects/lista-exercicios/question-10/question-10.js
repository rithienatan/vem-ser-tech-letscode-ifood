/**
 * Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N 
 * será sempre maior que ZERO. 
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
let valor = null;


/**--------- Functions ----------**/
/**
 * Imprime valor de 1 até N
 * 
 * @param {number} Valor
 */
const ImprimeValores = (valor) => {
    for(let i = 1; i <= valor; i++)
    { console.log(i); }
};

/**
 * Valida o input dos usuários
 * 
 * @param {number} Valor
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidUserInput(valor)
{
    let answer = true;

    if(valor === null || isNaN(valor) === true || valor < 1)
    { answer = false; }

    return(answer);
}//end ValidUserInput()


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("Digite um número qualquer!");
    let infoInputUser = false;

    do
    {
        valor = Number(prompt("Valor: "));

        if(ValidUserInput(valor) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoInputUser = true; }
    } while(infoInputUser === false);

    ImprimeValores(valor);
}//end StaticMain()

//StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};