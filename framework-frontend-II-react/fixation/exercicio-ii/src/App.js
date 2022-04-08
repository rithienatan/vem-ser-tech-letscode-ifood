/*---------- Libs and Other imports ----------*/
import { React, useState } from 'react';

/*---------- Functions and JSONs imports ----------*/
import heros from './aux/heros.json';

/*---------- CSS imports ----------*/
import { Container, TextField } from '@mui/material';
import './App.css';

/*--------- Main function ---------*/
/**
 * Main component
 * 
 * @returns {JSX} Return JSX
 */
function App() 
{
  const [hasFind, setHasFind] = useState(false);
  const [srcImg, setSrcImg] = useState(null);

  /**
   * Verifica o input do usuário
   * 
   * @param {string} userInput
   */
  const isHero = (userInput) => {
    const personagem = heros.find(element => element.nome === userInput);

    if(personagem !== undefined)
    {
      setHasFind(true);
      setSrcImg(personagem);
    }
    else
    {  
      setHasFind(false);
      setSrcImg(null);
    }//end if
  };

  return (
    <Container className='container'>
      <TextField
        id="search-hero"
        className='textfield'
        label="Entre com o nome do personagem"
        type="search"
        variant="outlined"
        onChange={(e) => isHero(e.target.value)}
      />

      {hasFind === false ? 
        <h1>O personagem vem aqui!</h1> : 
        <img
          className='heros-imgs'
          src={srcImg === null ? '' : srcImg.path}
          alt={srcImg === null ? '' : srcImg.nome}
        />
      }

    </Container>
  );
}//end App()

/*--------- exports ---------*/
export default App;
