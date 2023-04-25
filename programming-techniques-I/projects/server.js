/**
 * @author Rithie
 * @author Thatyara
 * @author Wesley
 * @author Flavius
 * 
 * @date 01-05-2022
 * 
 * @version 0.2.0
 */
//---------- Imports ----------
const http = require("http");
const url = require("url");


//---------- Custom Imports ----------
const pokemonOperations = require("./server-modules/pokemon-db-assist");
const onepieceOperations = require("./server-modules/onepiece-db-assist");
const digimonOperations = require("./server-modules/digimon-db-assist");


//---------- Server configs ---------
const configs = {
    host: "localhost",
    port: 8000
};


//---------- Create Server ----------
const server = http.createServer((req, res) => {
    const requestType = req.method;
    let path = "/";
    let queries = null;

    if(req.url !== "/")
    { path = url.parse(req.url, true).pathname; }

    //---------- Routes ----------
    //----- initial route -----
    if(path === "/" && requestType === "GET")
    {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("<html><body><h1>Trabalho Final Módulo VI</h1></body></html>");
        res.end();
        return;
    }//end if


    //----- Digimon API Routes -----
    if(path === "/createdigimon" && requestType === "POST")
    {
        req.on('data', content => {
            const digimon = JSON.parse(content);

            const hasInsert = digimonOperations.InsertNewdigimon(digimon);

            if(hasInsert === true)
            {
                res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
                res.write(`digimon ${digimon.nome} has added!`);
                res.end();
                return;
            }
            else
            {
                res.writeHead(500, { "Content-Type": "text/html;charset=utf-8" })
                res.write(`Unable to insert digimon ${digimon.nome} in database!`);
                res.end();
                return;
            }//end if
        });
    }//end if

    if(path === "/updatedigimon" && requestType === "PUT")
    {
        req.on('data', content => {
            const digimon = JSON.parse(content);

            const hasModify = digimonOperations.UpdateDigimon(digimon);
            
            if(hasModify.result === true)
            {
                res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
                res.write(hasModify.message);
                res.end();
                return;
            }
            else
            {
                res.writeHead(500, { "Content-Type": "text/html;charset=utf-8" })
                res.write(hasModify.message);
                res.end();
                return;
            }//end if
        });
    }//end if

    if(path === "/deletedigimon/" && requestType === "DELETE")
    {
        queries = url.parse(req.url, true).query;

        const hasDelete = digimonOperations.DeleteDigimon(parseInt(queries.id));

        if(hasDelete.result === true)
        {
            res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
            res.write(hasDelete.message);
            res.end();
            return;
        }
        else
        {
            res.writeHead(500, { "Content-Type": "text/html;charset=utf-8" })
            res.write(hasDelete.message);
            res.end();
            return;
        }//end if
    }//end if

    if(path === "/showdigimon" && requestType === "GET")
    {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(digimonOperations.digimondb));
        res.end();
        return;
    }//end if


    //----- Pokemon API Routes -----
    if(path === "/createpokemon" && requestType === "POST")
    {
        req.on('data', content => {
            const pokemon = JSON.parse(content);

            const hasInsert = pokemonOperations.InsertNewPokemon(pokemon);

            if(hasInsert === true)
            {
                res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
                res.write(`Pokemon ${pokemon.name} has added!`);
                res.end();
                return;
            }
            else
            {
                res.writeHead(500, { "Content-Type": "text/html;charset=utf-8" })
                res.write(`Unable to insert pokemon ${pokemon.name} in database!`);
                res.end();
                return;
            }//end if
        });
    }//end if

    if(path === "/updatepokemon" && requestType === "PUT")
    {
        req.on('data', content => {
            const pokemon = JSON.parse(content);

            const hasModify = pokemonOperations.UpdatePokemon(pokemon);
            
            if(hasModify.result === true)
            {
                res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
                res.write(hasModify.message);
                res.end();
                return;
            }
            else
            {
                res.writeHead(500, { "Content-Type": "text/html;charset=utf-8" })
                res.write(hasModify.message);
                res.end();
                return;
            }//end if
        });
    }//end if

    if(path === "/deletepokemon/" && requestType === "DELETE")
    {
        queries = url.parse(req.url, true).query;

        const hasDelete = pokemonOperations.DeletePokemon(parseInt(queries.id));

        if(hasDelete.result === true)
        {
            res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
            res.write(hasDelete.message);
            res.end();
            return;
        }
        else
        {
            res.writeHead(500, { "Content-Type": "text/html;charset=utf-8" })
            res.write(hasDelete.message);
            res.end();
            return;
        }//end if
    }//end if

    if(path === "/showpokemon" && requestType === "GET")
    {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(pokemonOperations.pokemondb));
        res.end();
        return;
    }//end if


    //----- OnePiece API Routes -----
    if(path === "/createonepiece" && requestType === "POST")
    {
        req.on('data', content => {
            const onepiece = JSON.parse(content);

            const hasInsert = onepieceOperations.InsertNewOnePiece(onepiece);

            if(hasInsert === true)
            {
                res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
                res.write(`One Piece character ${onepiece.name} has added!`);
                res.end();
                return;
            }
            else
            {
                res.writeHead(500, { "Content-Type": "text/html;charset=utf-8" })
                res.write(`Unable to insert One Piece character ${onepiece.name} in database!`);
                res.end();
                return;
            }//end if
        });
    }//end if

    if(path === "/updateonepiece" && requestType === "PUT")
    {
        req.on('data', content => {
            const onepiece = JSON.parse(content);

            const hasModify = onepieceOperations.UpdateOnePiece(onepiece);
            
            if(hasModify.result === true)
            {
                res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
                res.write(hasModify.message);
                res.end();
                return;
            }
            else
            {
                res.writeHead(500, { "Content-Type": "text/html;charset=utf-8" })
                res.write(hasModify.message);
                res.end();
                return;
            }//end if
        });
    }//end if

    if(path === "/deleteonepiece/" && requestType === "DELETE")
    {
        queries = url.parse(req.url, true).query;

        const hasDelete = onepieceOperations.DeleteOnePiece(parseInt(queries.id));

        if(hasDelete.result === true)
        {
            res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
            res.write(hasDelete.message);
            res.end();
            return;
        }
        else
        {
            res.writeHead(500, { "Content-Type": "text/html;charset=utf-8" })
            res.write(hasDelete.message);
            res.end();
            return;
        }//end if
    }//end if

    if(path === "/showonepiece" && requestType === "GET")
    {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(onepieceOperations.onepiecedb));
        res.end();
        return;
    }//end if


    //----- bad route -----
    if(path === "/" && requestType !== "GET")
    {
        res.writeHead(403, { "Content-Type": "text/html;charsets=utf-8" });
        res.write("<html><body><h1>403 Forbidden</h1></body></html>");
        res.end();
        return;
    }//end if
});

//---------- Running Server ----------
server.listen(configs.port, configs.host, () => {
    console.log(`Server is running on http://${configs.host}:${configs.port}`);
});