import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import fliaCuellar from "/images/fliaCuellar.png"
import "./CentralCard.css";


function CentralCard() {
  return (
    <>
      <Container>
        <section>
            <Card className="cardImg">
              <Card.Img variant="end" src={fliaCuellar}/>
              {/* <Card.Body className="cardBody"> */}
                {/* <Card.Text className="">
                ¡Cuan hermosos son los pies de los que anuncian el Evangelio del bien! Ro.10:15
                </Card.Text> */}
              {/* </Card.Body> */}
                {/* <Card.Title className="cardTitle">Familia Cuellar</Card.Title> */}
            </Card>
        </section>
      </Container>
     
    </>
  );
}

export default CentralCard;
