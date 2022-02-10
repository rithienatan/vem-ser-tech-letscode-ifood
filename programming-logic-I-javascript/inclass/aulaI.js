/**
 * @author Rithie Natan
 * @version 0.1.0
 * 
 * Data: 09/02/2022
 */
//---------- Imports ----------
const prompt = require('prompt-sync')();


//---------- functions ----------
//let altura = prompt("Digite sua altura: ");
//let peso = prompt("Digite seu peso: ");

/**
 * Calcula o IMC
 * 
 * @param {number} altura 
 * @param {number} peso
 * 
 * @returns {number} Calculo do IMC
 */
function IMC(altura, peso) 
{
    let resposta = null;

    if(typeof altura === "number" && typeof peso === "number")
    {
        if(altura > 0 && peso > 0)
        {
            let calc = peso/(altura**2);

            if(calc < 18.5)
            { resposta = "Abaixo do Peso"; }
            else if(calc >= 18.5 && calc <= 24.9)
            { resposta = "Peso Normal"; }
            else if(calc >= 25 && calc <= 29.9)
            { resposta = "Sobrepeso"; }
            else if(calc >= 30 && calc <= 34.9)
            { resposta = "Obesidade de Grau I"; }
            else if(calc >= 35 && calc <= 39.9)
            { resposta = "Obesidade de Grau II"; }
            else
            { resposta = "Obesidade de Grau III ou Mórbida"; }
        }
        else
        { resposta = "Altura e Peso devem ser maior que 0!"; }
    }
    else
    { resposta = "Altura e Peso devem ser números!"; }

    return(resposta);
}//end if

//console.log(IMC(Number(altura), Number(peso)));

//---------- module exports ----------
module.exports = IMC;