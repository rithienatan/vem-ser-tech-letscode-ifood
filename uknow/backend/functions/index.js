//---------- Imports ---------
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');


//--------- Custom Imports ---------
const CheckLogin = require("./actions/login/CheckLogin");
const Cadastro = require("./actions/cadastro/Cadastro");
const GetCursos = require("./actions/cursos/MostrarCursos");


//---------- Configs ---------
initializeApp();
const app = express();
app.use(cors());
app.use(express.json());


//--------- Routes ---------
app.get("/", (req, res) => {
    res.send("Welcome to UKnow API service!");
});


//--------- Login e Cadastro ---------
app.get("/email/:email/senha/:senha", async (req, res) => {
    const checklogin = await CheckLogin(req.params);

    res.status(checklogin.status).json(checklogin);
});

app.post("/cadastro", async (req, res) => {
    const cadastro = await Cadastro(req.body);

    res.status(cadastro.status).json(cadastro);
});


//---------- Cursos ----------
app.get("/getcursos", async (req, res) => {
    const getCursos = await GetCursos();

    res.status(getCursos.status).json(getCursos);
});


//---------- Exports -----------
exports.app = functions.https.onRequest(app);