/**
 * Server-side API with express and postgresql
 * 
 * @version 0.1.0
 * 
 * @author Rithie
 * @author Wesley
 * @author Flávius
 * @author Thatyara
 * 
 * @date 06-24-2022
 */
//----------- imports ----------
const express = require("express");


//----------- Custom Imports ----------
const pokemonView = require("./Operations/Pokemons/views.js");
const pokemonCreate = require("./Operations/Pokemons/create.js");
const pokemonUpdate = require("./Operations/Pokemons/update.js");
const pokemonDelete = require("./Operations/Pokemons/delete.js");

const treinadorView = require("./Operations/Treinadores/views.js");
const treinadorCreate = require("./Operations/Treinadores/create.js");
const treinadorUpdate = require("./Operations/Treinadores/update.js");
const treinadorDelete = require("./Operations/Treinadores/delete.js");

const partyView = require("./Operations/Party/view.js");
const partyCatch = require("./Operations/Party/catch.js");
const partyRelease = require("./Operations/Party/release.js");


//---------- Custom Imports --------
const configServer = require("./Configs/ServerConfigs.js");


//---------- configs ----------
const app = express();
app.use(express.json());


//---------- Routes ----------
app.get("/", (req, res) => {
    res.send("Welcome to Pokemon Catch'Em Stats!");
});


//---------- Treinador Operations ---------
app.get("/seeTreinador/:treinadorId", async (req, res) => {
    //URI EXAMPLE: localhost:5000/seeTreinador/all or localhost:5000/seeTreinador/3
    const result = await treinadorView(req.params);

    res.status(200).json(result);
});

app.post("/createTreinador/nomeTreinador/:nomeTreinador/idadeTreinador/:idadeTreinador", async (req, res) => {
    //URI EXAMPLE: localhost:5000/createTreinador/nomeTreinador/Rithie/idadeTreinador/26
    const result = await treinadorCreate(req.params);

    res.status(200).json(result);
});

app.put("/updateTreinador/:treinadorId", async (req, res) => {
    //URI Example: localhost:5000/updateTreinador/3
    //JSON Example: { "nomeTreinador": "Flavius", "idadeTreinador": "35" }
    const result = await treinadorUpdate(req.params, req.body);

    res.status(200).json(result);
});

app.delete("/deleteTreinador/:treinadorId", async (req, res) => {
    //URI Example: localhost:5000/deleteTreinador/1
    const result = await treinadorDelete(req.params);

    res.status(200).json(result);
});


//---------- Pokemon Operations ---------
app.get("/seePokemon/:pokemonId", async (req, res) => {
    //URI EXAMPLE: localhost:5000/seePokemon/all or localhost:5000/seePokemon/3
    const result = await pokemonView(req.params);

    res.status(200).json(result);
});

app.post("/createPokemon/pokemonName/:pokemonName/pokemonType/:pokemonType/pokedexNumber/:pokedexNumber", async (req, res) => {
    //URI EXAMPLE: localhost:5000/createPokemon/pokemonName/Charmeleon/pokemonType/Fire/pokedexNumber/5
    const result = await pokemonCreate(req.params);

    res.status(200).json(result);
});

app.put("/updatePokemon/:pokemonId", async (req, res) => {
    //URI Example: localhost:5000/updatePokemon/5
    //JSON Example: { "pokemonName": "Charmeleon", "pokemonType": "Water", "pokedexNumber": "5" }
    const result = await pokemonUpdate(req.params, req.body);

    res.status(200).json(result);
});

app.delete("/deletePokemon/:pokemonId", async (req, res) => {
    //URI Example: localhost:5000/deletePokemon/5
    const result = await pokemonDelete(req.params);

    res.status(200).json(result);
});


//---------- Party Operations ---------
app.get("/viewParty/:treinadorId", async (req, res) => {
    //URI Example: localhost:5000/viewParty/1
    const result = await partyView(req.params);

    res.status(200).json(result);
});

app.put("/catchPokemon/treinadorId/:treinadorId/pokemonId/:pokemonId", async (req, res) => {
    //URI Example: localhost:5000/catchPokemon/treinadorId/1/pokemonId/4
    const result = await partyCatch(req.params); 

    res.status(200).json(result);
});

app.delete("/releasePokemon/treinadorId/:treinadorId/pokemonId/:pokemonId", async (req, res) => {
    //URI Example: localhost:5000/releasePokemon/treinadorId/1/pokemonId/4
    const result = await partyRelease(req.params);

    res.status(200).json(result);
});


//---------- Listen ----------
app.listen(configServer.port, () => {
    console.log(`Server app listening on http://localhost:${configServer.port}`);
});