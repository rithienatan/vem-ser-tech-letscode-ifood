/*---------- Libs and Others ----------*/
import { React, useState } from "react";


/*---------- JSONs ----------*/
import filters from "./pokemon-api/filters.json";
import pokemons from "./pokemon-api/pokemons.json";


/*---------- Auxiliar Functions ---------*/
import randomIntFromInterval from "./aux-function/NumberRNG";


/*---------- Components ---------*/
import PokemonDiscovery from "./Components/pokemon-discovery/PokemonDiscovery";
import PokemonLog from "./Components/pokemon-log/PokemonLog";
import PokemonFiltro from "./Components/pokemon-filtro/PokemonFiltro"
import PokemonList from "./Components/pokemon-list/PokemonList";


/*---------- CSSs ----------*/
import './App.css';
import { Avatar, Box, Container, Backdrop, Button, Paper } from "@mui/material";


/*---------- Main App ----------*/
/**
 * Main App
 * 
 * @returns {JSX}
 */
function App() 
{


  const [match, setMatch] = useState(false);

  const [openBackdrop, setOpenBackdrop] = useState(true);
  const [startGame, setStartGame] = useState(false);


  //pega um pokemon aleatório para o game
  const [isThatPokemon, setIsThatPokemon] = useState(randomIntFromInterval(0, 149));


  //lista de pokemons
  const [pokes, setPokes] = useState(pokemons);


  //lista de filtros dos pokemons
  const [filtros, setFiltros] = useState(filters);


  /**
   * Começa ou recomeça o jogo
   */
  const NewGame = () => {
    setStartGame(!startGame);
  };

  return (
    <main>
      <p>{isThatPokemon}</p>
      {startGame === true ? 
        <>
          <Container className="main-content">
            <PokemonDiscovery />
            <PokemonLog />
            <PokemonFiltro filters={filters} />
          </Container>
      
          <Container className="aside-list">
            <PokemonList 
              pokemons={pokemons} 
              isThatPokemon={pokemons[isThatPokemon]} 
            />
          </Container>
        </> :
        <Backdrop 
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop}
        >
          <Paper elevation={16}>
            <Avatar
              sx={{ width: "60%", height: "60%" }}
              src="http://pm1.narvii.com/6434/7a2cb5fc86df1db37db549422128c66186059808_00.jpg"
              alt="Guess Who? Pikachu"
            >
              Pikachu
            </Avatar>

            <Box>
              <Button 
                variant="contaned"
                size="large" 
                onClick={() => NewGame()}
              >
                New Game
              </Button>
            </Box>
        </Paper>
        </Backdrop>
      }
    </main>
  );
}//end App()

export default App;