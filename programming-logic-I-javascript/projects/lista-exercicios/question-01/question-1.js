/**
 * Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.
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
let base = null;
let altura = null;


/**--------- Functions ----------**/
/**
 * Calcula a área do triangulo
 * 
 * @param {number} base - Base
 * @param {number} altura - Altura
 * 
 * @returns {number} Área do Triângulo
 */
const AreaTriangulo = (base, altura) => (base*altura)/2;

/**
 * Valida o input dos usuários
 * 
 * @param {number} base - Base
 * @param {number} altura - Altura
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidUserInput(base, altura)
{
    let answer = true;

    if(base === null || isNaN(base) === true || base < 0 ||
        altura === null || isNaN(altura) === true || altura < 0)
    { answer = false; }

    return(answer);
}//end ValidUserInput()


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("Entre com a base e a altura do triângulo!");
    let infoInputUser = false;

    do
    {
        base = Number(prompt("Entre com o tamanho da base do triângulo: "));
        altura = Number(prompt("Entre com o tamanho da altura do triângulo: "));

        if(ValidUserInput(base, altura) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoInputUser = true; }
    } while(infoInputUser === false);

    console.log("A área do triângulo é: ", AreaTriangulo(base, altura));
}//end StaticMain()

StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};