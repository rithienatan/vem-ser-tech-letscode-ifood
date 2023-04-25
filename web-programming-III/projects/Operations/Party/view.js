//----------- imports ----------
const fs = require("fs");


//----------- Globals ----------
async function ViewParty(params)
{
    const fileParty = fs.readFileSync("./Filesystem_temporary/Party.json");

    let filePartyJson = JSON.parse(fileParty);

    let trainer = filePartyJson.parties.find(element => element.id == params.treinadorId);

    return(trainer);
}//end ViewParty()


//----------- exports ----------
module.exports = ViewParty;