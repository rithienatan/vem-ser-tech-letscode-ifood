//----------- imports ----------
const fs = require("fs");


//----------- Globals ----------
async function DeleteTreinador(params)
{
    let file = fs.readFileSync("./Filesystem_temporary/Treinador.json");
    let fileJson = JSON.parse(file);
    let id = parseInt(params.treinadorId);

    const treinador = fileJson.treinadores.find(element => element.id === id);

    const arraytreinador = fileJson.treinadores.filter(element => element.id !== id);
    fileJson.treinadores = arraytreinador;

    fs.writeFileSync("./Filesystem_temporary/Treinador.json", JSON.stringify(fileJson));

    return(treinador);
}//end DeleteTreinador()


//----------- exports ----------
module.exports = DeleteTreinador;