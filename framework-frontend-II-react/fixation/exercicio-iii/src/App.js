/*--------- Imports Libs and Other ---------*/
import { React } from 'react';

/*--------- Functions and JSONs ----------*/
import heros from './aux/heros.json';

/*---------- Components ----------*/
import BoxImgHero from './components/BoxImgHero';

/*--------- Imports CSS ---------*/
import { Container } from '@mui/material';
import './App.css';

/*---------- Main Component ----------*/
/**
 * Main component
 * 
 * @returns {JSX} Return JSX
 */
function App()
{
  return (
    <Container>
      {heros.map((heros) => {
        return(
          <BoxImgHero name={heros.name} arrayImg={heros.path} />
        );
      })}
    </Container>
  );
}//end App()

/*--------- exports ---------*/
export default App;