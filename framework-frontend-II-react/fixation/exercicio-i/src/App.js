/*---------- Libs and Others imports ---------*/
import { React, useState } from 'react';

/*---------- Functions and JSONs imports ---------*/
import randomIntFromInterval from './aux-methods/RngNumber';
import { alunos } from './aux-methods/Alunos';

/*---------- CSS imports ---------*/
import { Button, Container, List, Grid, ListItemText, ListItem } from '@mui/material';
import './App.css';


/*---------- Main function ----------*/
/**
 * Main Component
 * 
 * @returns {JSX} Return JSX 
 */
function App() 
{
  const [notRespond, setNotRespond] = useState(alunos); 
  const [respond, setRespond] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const SortAluno = () => {
    const rng = randomIntFromInterval(0, notRespond.length-1);
    const selectedAluno = notRespond[rng];

    setRespond([...respond, selectedAluno]);

    setNotRespond(notRespond.filter((aluno) => {
      return aluno !== selectedAluno;
    }));

    console.log('Hre')
  };

  const DisplayErrorMessage = () => {
    setShowErrorMessage(true);
    setTimeout(() => setShowErrorMessage(false), 2000);
  };

  return (
    <Container className='container' fixed>
      <h1>Lista de Alunos</h1>

      <Button className='button' variant="contained" 
        onClick={() => notRespond.length > 0 ? SortAluno() : DisplayErrorMessage()}>
          Sort
      </Button>

      {notRespond.length === 0 && showErrorMessage === true ? <p>Não há mais estudantes para sortear!</p> : null}

      <Grid className='grid' container>
        <Grid className='grid-item' item xs={5}>
          <h2>Não respondeu</h2>

          <List>
            {notRespond.map((aluno, index) => {
                return(
                  <ListItem key={`${index}`}>
                    <ListItemText primary={aluno} />
                  </ListItem>
                );
              })}
          </List>
        </Grid>
        <Grid className='grid-item' item xs={5}>
          <h2>Respondeu</h2>

          <List>
            {respond.map((aluno, index) => {
              return(
                <ListItem key={`${index}`}>
                  <ListItemText primary={aluno} />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}//end App()

/*---------- exports ----------*/
export default App;
