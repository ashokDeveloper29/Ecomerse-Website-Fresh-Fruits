import { useEffect, useState } from "react"
import { frootsCategory, getProductCategory } from "../../api/Api"
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";


export default function Snacks() {
    const [snacks, setSnacks] = useState([{}])

    const getFruits = async () => {
        const res = await getProductCategory("64a1558b9c60b44f60a4d380")
        if (res) {
            setSnacks(res.front_product)
        }
    }

    useEffect(() => {
        getFruits()
    }, [])
    return (
        <>
            <Container fluid>

                <Row>
                    <Col md={12}>
                        <Row>

                            <Col md={12} className="m-auto " >
                                <Row className="justify-content-between shadow-lg mb-2 bg-body-tertiary rounded">
                                    {/* <p className="text-center fs-3">Snacks</p> */}
                                    {/* <div className="wrapper">
                                        <div className="bg"> Snacks </div>
                                        <div className="fg"> Snacks </div>
                                    </div> */}

                                    <Col md={2} style={{ justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                                        <Link to="/64a1558b9c60b44f60a4d380" style={{ textDecoration: "none" }}>
                                            <div className="wrapper mt-5" >
                                                <div className="bg"> Snacks </div>
                                                <div className="fg"> Snacks </div>
                                            </div>
                                            <br />
                                            <div className="text-center">
                                                <Button>
                                                    view All <AiOutlineArrowRight />
                                                </Button>
                                            </div>
                                        </Link>
                                    </Col>
                                    {
                                        snacks?.slice(0, 5).map((ele, index) =>
                                            <Col md={2} style={{ cursor: "pointer" }} className="mt-5" >
                                                <Link to={`/${ele.category_id}`} className="text-decoration-none text-black ">

                                                    <Image style={{ borderRadius: "20px" }} className="hovercart" src={ele.product_img} width="90%" height="150"></Image>
                                                    <p className="text-center mt-2" style={{textTransform:"capitalize",fontWeight:"500",fontSize:"16px"}}>{ele.product_name} <br/>
                                                     <span style={{color:"green",fontWeight:"500"}}>Min :  {ele.product_discount}% off</span>
                                                    </p>
                                                </Link>

                                            </Col>
                                        )
                                    }

                                </Row>
                            </Col>
                        </Row>
                    </Col>





                </Row>
            </Container>
        </>
    )
}