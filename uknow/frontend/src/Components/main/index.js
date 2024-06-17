//--------- Import styles ---------
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Fade from 'react-reveal/Fade';


//----------- Custom Style Import ---------
import Cursos from "../cursos";
import './index.css';
import pic01 from './images/harold.jpg';
import pic02 from './images/lalmano.png';
import pic03 from './images/jerma.webp';
import pic04 from "./images/coin-flip.gif";


//---------- Main ---------
/**
 * App main content
 * 
 * @returns {JSX}
 */
export default function Main() 
{
  return (
    <main>
      <div className="emptySpace" />              
      <section id="sobre" className='first__section'>
        <br />
        <br />        
        <Container>
          <Row>
            <Col className='hide__on__mobile'>
              <Fade>
                <img src={pic01} alt="business man" />
              </Fade>
            </Col>
            <Col className='texto__container'>
              <div className='texto'>
                <Fade bottom>
                  <h2>Trabalhamos com educação</h2>
                  <p>
                    Somos uma empresa que trabalha com E-learning. Acreditamos na educação a distância e 
                    no ensino através de gamificação. Para isso, lançamos a plataforma UKnow. Aqui, você
                    terá acesso a diversos cursos na área de tecnologia da informação, biologia, astronomia e
                    muito mais.
                  </p>
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>        
        <br />        
        <br />        
      </section>
      <section id="gamificacao" className='second__section'>
        <br />
        <br />        
        <Container>
          <Row>
            <Col className='texto__container'>
              <div className='texto'>
                <Fade bottom>
                  <h1>Estudar pode ser divertido</h1>
                  <p>
                    Um dos maiores desafios das escolas é atrair a atenção dos alunos no 
                    processo de aprendizagem. A gamificação na educação é uma alternativa 
                    que vem ganhando espaço entre as instituições para aumentar a participação 
                    e engajamento dos alunos nas salas de aula mundo afora.
                  </p>
                </Fade>                  
              </div>              
            </Col>
            <Col className='hide__on__mobile'>
              <Fade>
                <img src={pic02} alt="gamer man" />
              </Fade>
            </Col>
          </Row>
        </Container>        
        <br />        
        <br />        
      </section>
      <section id="democratizacao" className='third__section'>
        <br />
        <br />        
        <Container>
          <Row>
            <Col className='hide__on__mobile'>
              <Fade>            
                <img src={pic03} alt="popular man" />
              </Fade>              
            </Col>
            <Col className='texto__container'>
              <div className='texto'>
                <Fade bottom>
                  <h2>A democratização do ensino</h2>
                  <p>
                    Observando o cenário organizacional atual, de competitividade globalizada e
                    mudanças aceleradas, a gestão do conhecimento torna-se imprescindível para a obtenção de
                    vantagem competitiva. Para isto, é necessário que a acessibilidade de conteúdos seja de forma
                    simples e inclusivas para a população como um todo.
                  </p>
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>        
        <br />        
        <br />        
      </section>
      <section id="knowtoken" className='fourth__section'>
        <br />
        <br />        
        <Container>
          <Row>
            <Col className='texto__container'>
              <div className='texto'>
                <Fade bottom>
                  <h1>KnowToken</h1>
                  <p>
                    Inspirado em criptomoedas, apresentamos para vocês o KnowToken.
                    Nossa moeda baseada em blockchain, no qual pode utiliza-lá para comprar
                    novos cursos em nossa plataforma e troca-lá por outras recompensas.
                  </p>
                </Fade>                  
              </div>              
            </Col>
            <Col className='hide__on__mobile'>
              <Fade>
                <img src={pic04} alt="gamer man" />
              </Fade>
            </Col>
          </Row>
        </Container>        
        <br />        
        <br />        
      </section>
      <section id="cursos" className='fifth__section'>
        <br />
        <br />
        <Container>
          <Cursos />
        </Container>      
        <br />        
        <br />        
      </section>        
    </main>
  );
}//end Main()