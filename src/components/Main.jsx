import {React} from "react";
import { Container, Row } from "react-bootstrap";

function Main(props) {


  const divStyle = {
    marginLeft: '2rem',
    marginTop: '-3rem',
    paddingTop: '6rem'
  };


  return (
      <div className="d-flex justify-content-center align-items-center" style={divStyle}>
        <Container>
          <Row>
            <h4>#{props.pokeId}</h4>
          </Row>
          <Row>
            <h1 style={{fontSize: '80px'}}>{props.pokeName}</h1>
          </Row>
        </Container>
        <Container>
        <Row>
          <img style={{width: '500px', height: '300px', marginTop: '5rem' }} src={props.sprites} alt={props.pokeName}/>
          </Row>
        </Container>
      </div>
  );
}

export default Main;
