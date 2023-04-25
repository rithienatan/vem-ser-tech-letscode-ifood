//----------- imports ----------
const fs = require("fs");


//----------- Globals ----------
async function UpdateTreinador(params, body)
{
    let file = fs.readFileSync("./Filesystem_temporary/Treinador.json");
    let fileJson = JSON.parse(file);
    let id = parseInt(params.treinadorId);

    const treinador = fileJson.treinadores.find(element => element.id === id);
    const index = fileJson.treinadores.findIndex(element => element.id === id);

    fileJson.treinadores[index] = {
        "id": treinador.id,
        ...body
    };

    fs.writeFileSync("./Filesystem_temporary/Treinador.json", JSON.stringify(fileJson));

    return(fileJson.treinadores[index]);
}//end UpdateTreinador()


//----------- exports ----------
module.exports = UpdateTreinador;