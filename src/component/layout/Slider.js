import { Col, Container } from "react-bootstrap";
import Header from "./Header";
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from "react";
import { sliderImage } from "../../api/Api";


export default function Slider() {
  const [slider, setSlider] = useState([{}])
  console.log(slider)
  const getslider = async () => {
    const res = await sliderImage()
    if (res) {
      setSlider(res.Sliders)
    }
  }
  useEffect(() => {
    getslider()
  }, [])
  return (
    <>
      <Container fluid>
        <Col md={12} className="m-auto bg-secondary-subtle text-emphasis-secondary mt-5" >


          <Carousel data-bs-theme="dark" >

            {
              slider.map(e =>
                <Carousel.Item>

                  <img
                    className="d-block w-100" style={{ height: "370px" }}
                    src={`${e.slider_img}`}
                    height="400"

                  />
                  {/* <Carousel.Caption>
          <h5 className="text-white">First slide label</h5>
          <p className="text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
                </Carousel.Item>
              )
            }





          </Carousel>
        </Col>

      </Container>


    </>

  );
}

