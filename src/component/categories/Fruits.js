import { useEffect, useState } from "react"
import { frootsCategory, getProductCategory } from "../../api/Api"
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Fruits() {
    const [product, setFruits] = useState([{}])

    const getFruits = async () => {
        const res = await getProductCategory("64b69907c4bbf8f91ea91298")
        if (res) {
            setFruits(res.front_product)
            console.warn(product)
        }
    }

    useEffect(() => {
        getFruits()
    }, [])
    return (
        <>
            <Container fluid>

                <Row>
                    <Col md={12} className="">
                        <Row>

                            <Col md={12} className="m-auto  " >
                                <Row className="justify-content-between shadow-lg mb-2 bg-body-tertiary rounded">
                                   
                                    <Col md={2} style={{ justifyContent: "center", alignItems: "center",backgroundColor:"white"}}>

                                       
                                        <Link to="/64b69907c4bbf8f91ea91298" style={{ textDecoration: "none" }}>
                                            <div className="wrapper mt-5" >

                                                <div className="bg"> Fruits </div>
                                                <div className="fg"> Fruits </div>

                                            </div>
                                            <br />
                                            <div className="text-center">
                                                <Button>
                                                    view All <AiOutlineArrowRight/>
                                                </Button>
                                            </div>
                                        </Link>


                                    </Col>
                                    {
                                        product?.slice(4, 9).map((ele, index) =>
                                            <Col md={2} key={index} style={{ cursor: "pointer" }} className="mt-5" >
                                                <Link to={`/${ele.category_id}`} className="text-decoration-none text-black ">

                                                    <Image  className="hovercart" src={ele.product_img} width="90%" height="150"></Image>
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