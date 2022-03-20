/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Funcionario = require('./Funcionario.js');


//---------- Runing Program ----------
function StaticMain()
{
    //criar o objeto forma
    let obj = new Funcionario("Rithie", "999.999.999-99", 26, "12-12-1995", 5000, "Dev. FullStack");

    //prints
    console.log(obj);
    let salario = obj.CalcularSalario(2000); 
    console.log(salario);
    console.log(obj.CalcularFerias(salario, 5000));
}//end StaticMain()

StaticMain();