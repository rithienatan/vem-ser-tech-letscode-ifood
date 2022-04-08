/*--------- Imports Libs and Others ----------*/
import { React, useEffect, useState } from 'react';

/*--------- Imports CSS ---------*/
import { 
  Button, 
  Container, 
  Grid, 
  TextField, 
  InputAdornment,
  List,
  ListItem,
  Alert
} from '@mui/material';
import './App.css';

/*---------- Main Component ----------*/
/**
 * Main Component
 * 
 * @returns {JSX} Return JSX
 */
function App() 
{
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [listLanches, setListLanches] = useState([]);
  const [all, setAll] = useState(0);

  const [warning, setWarning] = useState(false);

  /**
   * Adiciona item na lista
   * 
   * @param {string} description
   * @param {string} price
   */
  const adicionar = (description, price) => {
    if(description === null || description === '' ||
      price === null || price === '')
    { setWarning(true); }
    else
    {
      const newItem = {
        "descricao": description,
        "preco": price
      };

      setListLanches([...listLanches, newItem]);
      setAll(all + Number(price));
    }//end if
  };

  /**
   * Reseta a lista de lanches
   */
  const resetar = () => {
    setListLanches([]);
    setAll(0);
  };


  return (
    <Container className='container'>
      <Grid container>
        <Grid item xs={5} className='gridItem'>
          <TextField 
            className="descriptionField" 
            label="Descrição" 
            variant="standard" 
            onChange={(e) => { setWarning(false); setDescription(e.target.value); }}
          />
          <TextField 
            className="priceField" 
            label="Preço" 
            variant="standard" 
            type="number"
            onChange={(e) => { setWarning(false); setPrice(e.target.value); }} 
          />

          {warning === true ? <Alert severity='error' className='alert'>Lanche Inválido!</Alert> : null}

          <Button 
            className='buttons' 
            variant="contained"
            onClick={() => adicionar(description, price)}
          >
            Adicionar
          </Button>
        </Grid>

        <Grid item xs={6} className='gridItem'>
          <h2>Lanches</h2>
          <Button 
            className='buttons' 
            variant="contained" 
            color="error"
            onClick={() => resetar()}
          >
            Resetar
          </Button>

          <List>
            {listLanches.map((item, index) => {
              return(
                <ListItem key={index} className="myListItem">
                  <p>{item.descricao}</p>
                  <p className='priceText'>R$ {item.preco}</p>
                </ListItem>
              );
            })}
          </List>
        </Grid>

        <Grid item xs={12} className='gridItem lanches'>
          <TextField
            value={all}
            className='totalField'
            label="Total"
            type="number"
            color="info"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>R$</InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}//end App()

/*---------- exports ---------*/
export default App;
