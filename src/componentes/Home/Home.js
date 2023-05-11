import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/esm/Button";

const Home = () => {
  return (
    <div>
      <h1 className="fw-bold">Todo-Pantalla</h1>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "540px", objectFit: "cover" }}
            className="d-block w-100 d-none d-md-block mx-auto"
            src="/images/celulares.jpg"
            alt="First slide"
          />
          <img
            style={{ height: "400px", objectFit: "cover" }}
            className="d-block w-100 d-md-none mx-auto"
            src="/images/celulares.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <Button variant="dark">
              <h3 className="fw-bold">CELULARES</h3>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "540px", objectFit: "cover" }}
            className="d-block w-100 d-none d-md-block mx-auto"
            src="/images/tablets.webp"
            alt="Second slide"
          />
          <img
            style={{ height: "400px", objectFit: "cover" }}
            className="d-block w-100 d-md-none mx-auto"
            src="/images/tablets.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
            <Button variant="dark">
              <h3 className="fw-bold">TABLETS</h3>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "540px", objectFit: "cover" }}
            className="d-block w-100 d-none d-md-block mx-auto"
            src="/images/televisores.png"
            alt="Third slide"
          />
          <img
            style={{ height: "400px", objectFit: "cover" }}
            className="d-block w-100 d-md-none mx-auto"
            src="/images/televisores.webp"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Button variant="dark">
              <h3 className="fw-bold">TELEVISORES</h3>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
