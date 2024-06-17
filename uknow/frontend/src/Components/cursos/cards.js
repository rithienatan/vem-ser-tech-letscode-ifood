//----------- Import Custom Styles ---------
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../cursos/cards.css'

//----------- Component ---------
/**
 * Cards Component
 * 
 * @param {*} props 
 * @returns {JSX}
 */
export default function Cards(props) 
{    
  const CardStyle = {
    border: "0.1em solid #aeb7b3",
    boxShadow: "0.5em 0.5em 0.5em #1e3f29", 
    padding: "2em",
    margin: "1em",
    width: '17rem',
    backgroundColor: "#E1EFE6"
  };

  return (
    <Card style={CardStyle}>
      <Card.Img variant="top" src={props.curso.foto} style={{ width: "100%", justifyContent: "center" }} />
      <Card.Body>
        <Card.Title>{`${props.curso.nome} by ${props.curso.autor}`}</Card.Title>
        <Card.Text>
          <h6>{props.curso.tema}</h6>
          <p>{props.curso.descricao}</p>
          <p><b>{`Preço: ${props.curso.preco} $`}</b></p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}//end Cards()