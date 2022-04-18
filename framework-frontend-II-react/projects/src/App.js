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
import { Container, Backdrop, Button, Paper, Grid } from "@mui/material";


/*---------- Main App ----------*/
/**
 * Main App
 * 
 * @returns {JSX.Element}
 */
function App() 
{
  //new game and restart game configuration
  const [startGame, setStartGame] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(true);
  
  /**
   * Começa ou recomeça o jogo
   */
  const NewGame = () => {
    setStartGame(!startGame);
    setOpenBackdrop(!openBackdrop);
  };


  //set random pokemon for init game
  const [isThatPokemon, setIsThatPokemon] = useState(randomIntFromInterval(0, 149));


  //Configure to show right palpite
  const [palpite, setPalpite] = useState(false);


  //lista de pokemons
  const [pokes, setPokes] = useState(pokemons);


  //Configure logs
  const [log, setLog] = useState(null);

  return (
    <main>
      <Backdrop 
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
      >
        <Paper 
          className="paperBackdrop" 
          sx={{ width: "80%", height: "80%" }} 
          elevation={16}
        >
          <Grid 
            sx={{ width: "100%", height: "100%" }}
            container 
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={4}>
              <h1>Welcome to Guess Who? Pokémon!</h1>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={2}>
              <Button 
                sx={{ color: "#181D27", backgroundColor: "#FFEBC6" }}
                variant="contained"
                size="large" 
                onClick={() => NewGame()}
              >
                New Game
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Backdrop>

      <Container disableGutters className="main-content">
        <PokemonDiscovery pokemon={pokemons[isThatPokemon]} palpite={palpite} />
        <PokemonLog names={log} />
        <PokemonFiltro 
          filters={filters} 
          pokemon={pokemons[isThatPokemon]}
          pokeList={pokes} 
          updatePokemonList={setPokes}
          updateLog={setLog}
        />
      </Container>
      
      <Container 
        disableGutters
        className="aside-list"
        sx={{ width: "15%" }}
      >
        <PokemonList 
          pokemons={pokes} 
          isThatPokemon={pokemons[isThatPokemon]} 
          rightPalpite={setPalpite}
          updateLog={setLog}
        />
      </Container>
    </main>
  );
}//end App()

export default App;