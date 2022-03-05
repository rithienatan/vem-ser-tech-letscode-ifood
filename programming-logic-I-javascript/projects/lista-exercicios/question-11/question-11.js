/**
 *  Escreva um algoritmo que imprima a tabuada (de 1 a 10) para os números de 1 a 10. 
 */
/**
 * @author Rithie Natan
 * @date 04-03-2022
 * @version 0.1.0
 */
/**--------- Functions ----------**/
/**
 * 
 */
function TabuadaAdicao()
{
    for(let i = 1; i <= 10; i++)
    {
        for(let j = 1; j <= 10; j++)
        { console.log(i+j); }
    }//end for
}//end TabuadaAdicao()

/**
 * 
 */
function TabuadaSubtracao()
{
    for(let i = 1; i <= 10; i++)
    {
        for(let j = i+1; j <= 10; j++)
        { console.log(j-i); }
    }//end for
}//end TabuadaSubtracao()

/**
 * 
 */
function TabuadaMultiplicacao()
{
    for(let i = 1; i <= 10; i++)
    {
        for(let j = 1; j <= 10; j++)
        { console.log(i*j); }
    }//end for
}//end TabuadaMultiplicacao()

/**
 * 
 */
function TabuadaDivisao()
{
    for(let i = 1; i <= 10; i++)
    {
        for(let j = 1; j <= 10; j++)
        { console.log((j*i)/i); }
    }//end for
}//end TabuadaDivicao()


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("--------- Tabuada da Soma ---------");
    TabuadaAdicao();

    console.log("--------- Tabuada da Subtração ---------");
    TabuadaSubtracao();

    console.log("--------- Tabuada da Multiplicação ---------");
    TabuadaMultiplicacao();

    console.log("--------- Tabuada da Divisão ---------");
    TabuadaDivisao();
}//end StaticMain()

StaticMain();