import {React} from "react";
import { Container, Row } from "react-bootstrap";

function Main(props) {




  return (
      <div>
        <Container>
          <Row>
            <h4>#{props.pokeId}</h4>
          </Row>
          <Row>
            <h1 >{props.pokeName}</h1>
          </Row>
        </Container>
        <Container>
        <Row>
          <img style={{width: '500px', height: '500px'}} src={props.sprites} alt={props.pokeName}/>
          </Row>
        </Container>
      </div>
  );
}

export default Main;
