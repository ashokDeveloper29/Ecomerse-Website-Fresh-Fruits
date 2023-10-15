import { Col, Container, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { useEffect, useState } from "react";
import { allCategory } from "../../api/Api";
export default function Footer() {
  const [category, setCategory] = useState([{}])

  const categoryList = async () => {
    const res = await allCategory()
    if (res) {
      setCategory(res.categoryList)
    }
  }
  useEffect(() => {
    categoryList()
  }, [])

  return (
    <>

      <Container fluid className="footer mt-5" >

        <Col md={12} className="containerrr" >
          <Row className="">
            <Col md={3}>
              <div className="footer-col">
                <h4 className="te">company</h4>
                <ul>
                  <li><Link to="/about">About us</Link></li>
                  <li><Link to="/tearmsandconditions">Tearms And Conditions</Link></li>
                  <li><Link to="/about">privacy policy</Link></li>
                  <li><Link to="/about">affiliate program</Link></li>
                </ul>
              </div>
            </Col>

            <Col md={3}>
              <div className="footer-col">
                <h4 className="te">Contact</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">shipping</a></li>
                  <li><a href="#">returns</a></li>
                  <li><a href="#">order status</a></li>
                  <li><a href="#">payment options</a></li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-col">
                <h4 className="te">Products Category</h4>
                <ul>
                  {
                    category.slice(0, 4).map((ele, index) =>
                      <li>
                        <Link to={`/${ele._id}`} style={{ textDecoration: "none" }}>
                          <p key={index} className=''>{ele.categoryName}</p>
                        </Link>
                      </li>
                    )
                  }
                </ul>
              </div>
            </Col> <Col md={3}>
              <div className="footer-col">
                <h4 className="teee">follow us</h4>
                <div class="social-links">
                  <Link to="https://www.instagram.com/"> <BsInstagram /> </Link>
                  <Link to=""> <AiFillTwitterCircle /> </Link>
                  <Link to=""> <BsInstagram /> </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Col>



      </Container>

    </>
  )
}