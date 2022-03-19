/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */

class Carro
{
    /**
     * constructor default
     * 
     * @param {string} modelo - Modelo do carro
     * @param {string} placa - Placa do Carro
     * @param {number} km - KM totais percorrido
     */
    constructor(modelo, placa, km)
    {
        this.modelo = modelo;
        this.placa = placa;
        this.km = km
    }//end constructor()
}//end class


let car = new Carro('Slim', 'KGB-8000', 98000);

console.log(car);