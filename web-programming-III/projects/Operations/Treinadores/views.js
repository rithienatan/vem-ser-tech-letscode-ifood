//----------- imports ----------
const fs = require("fs");


//----------- Globals ----------
async function ViewsTreinador(params)
{
    let answer = null;

    let file = fs.readFileSync("./Filesystem_temporary/Treinador.json");
    let fileJson = JSON.parse(file);
    let paramType = params.treinadorId;

    if(paramType === "all")
    { answer = fileJson.treinadores; }
    else
    {
        let idTreinadores = parseInt(paramType);
        answer = fileJson.treinadores.find(element => element.id === idTreinadores)
    }//end if


    return(answer);
}//end ViewsTreinador()


//----------- exports ----------
module.exports = ViewsTreinador;