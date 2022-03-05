/**
 * A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá 
 * hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de 
 * horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das 
 * horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).   
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
let horasTrabalhadas = null;
let salarioPorHora = null;


/**--------- Functions ----------**/
/**
 * Calcula o salário final de um funcionário ao final do mês
 * 
 * @param {number} horasTrabalhadas - Horas trabalhadas no mês
 * @param {number} salarioPorHora - Valor do salário por hora
 * 
 * @returns {number} Retorna o salário final
 */
const SalarioFinal = (horasTrabalhadas, salarioPorHora) => {
    if(horasTrabalhadas <= 40)
    { return(horasTrabalhadas*salarioPorHora) }
    else
    { return(40*salarioPorHora + ((horasTrabalhadas-40)*salarioPorHora*1.5)); }
};

/**
 * Valida o input dos usuários
 * 
 * @param {number} horasTrabalhadas - Horas trabalhadas no mês
 * @param {number} salarioPorHora - Valor do salário por hora
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidUserInput(horasTrabalhadas, salarioPorHora)
{
    let answer = true;

    if(horasTrabalhadas === null || isNaN(horasTrabalhadas) === true || horasTrabalhadas < 0 ||
        salarioPorHora === null || isNaN(salarioPorHora) === true || salarioPorHora < 0)
    { answer = false; }

    return(answer);
}//end ValidUserInput()


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("Entre com as horas trabalhadas e o salário por hora!");
    let infoInputUser = false;

    do
    {
        horasTrabalhadas = Number(prompt("Horas Trabalhadas: "));
        salarioPorHora = Number(prompt("Salário por hora: "));

        if(ValidUserInput(horasTrabalhadas, salarioPorHora) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoInputUser = true; }
    } while(infoInputUser === false);

    console.log("Salário total do mês: ", SalarioFinal(horasTrabalhadas, salarioPorHora));
}//end StaticMain()

//StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};