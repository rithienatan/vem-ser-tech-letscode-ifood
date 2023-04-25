//----------- imports ----------
const fs = require("fs");


//----------- Globals ----------
async function CreateTreinador(params)
{
    let file = fs.readFileSync("./Filesystem_temporary/Treinador.json");
    let fileJson = JSON.parse(file);

    const treinador = {
        "id": fileJson.last_id + 1,
        ...params
    };

    fileJson.treinadores.push(treinador);
    fileJson.last_id = treinador.id; 

    fs.writeFileSync("./Filesystem_temporary/Treinador.json", JSON.stringify(fileJson));

    return(treinador);
}//end CreateTreinador()


//----------- exports ----------
module.exports = CreateTreinador;