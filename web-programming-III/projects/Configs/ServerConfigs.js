//---------- imports ---------
require("dotenv").config();


//----------- Globals ----------
const config = {
    port: process.env.SERVER_PORT || 9000,
};


//----------- Exports ----------
module.exports = config;