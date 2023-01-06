import { Card, CardImg, CardImgOverlay, Col } from "reactstrap";

function Home() {
  return (
    <div className="container home">
      <div className="row g-0">
        <Col className="bg-light">
          <Card inverse className="cardbody border-0">
            <CardImg
              alt="Card image cap"
              src="/img/pagehome/bibliotheque.jpg"
              width="100%"
              height="825"
            />
            <CardImgOverlay></CardImgOverlay>
          </Card>
        </Col>
      </div>
    </div>
  );
}
export default Home;
