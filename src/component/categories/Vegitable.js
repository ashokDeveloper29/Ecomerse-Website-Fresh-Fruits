import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Header from "../layout/Header";
import { useEffect, useState } from "react";
import { getProductCategory } from "../../api/Api";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Slider from "../layout/Slider";
import { AiOutlineArrowRight } from "react-icons/ai";



export default function Vegitable() {
    const [product, setProduct] = useState([{}])


    const getVegitables = async () => {
        const res = await getProductCategory("64ad2b67eee44939c8c6c425")
        if (res) {
            setProduct(res.front_product)
            console.warn(product)
        }
    }

    useEffect(() => {
        getVegitables()

    }, [])
    return (
        <>

            <Container fluid>

                <Row>
                    <Col md={12}>
                        <Row>

                            <Col md={12} className=" mt-5 m-auto " >
                                <Row className="justify-content-between shadow-lg mb-2 bg-body-tertiary rounded"> 
                                    <Col md={2} style={{ justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                                        <Link to="/64ad2b67eee44939c8c6c425" style={{ textDecoration: "none" }}>
                                            <div className="wrapper mt-5" >
                                                <div className="bg"> Vegitables </div>
                                                <div className="fg"> Vegitables </div>
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
                                        product?.slice(5, 10).map((ele, index) =>
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






{/* <Image style={{ borderRadius: "15px" }} src="http://localhost:3000/image/logo.jpg" width="280" height="100" /> */ }








{/* <Container fluid>

<Row>
    <Col md={12}>
        <Row>
           
            <Col md={9} className=" mt-5 m-auto" >
                <Row>
                    <p className="text-center fs-3">Vegitables</p>
                    {
                        product?.slice(0,4).map((ele,index)=>
                        <Col md={3} key={index} className="mt-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded hove" style={{cursor:"pointer"}}>
                            <Link to={`/${ele._id}`} className="text-decoration-none text-black ">
                            <div className="mt-2 text-center shadow p-3 mb-5 bg-body-tertiary rounded ">
                            <Image src={ele.product_img} width="80%" height="200" />
                        </div>
                        <span  className="ms-2 aign">{ele.product_name}</span>
                        <br/>
                        <button className="ms-2 button" >{ele.product_rating}<AiFillStar className="ms-2" style={{color:"yellow"}}/></button>
                        <br/>
                        <span className="fonts ms-2">MRP : </span> <span className="cut">{ele.product_prize}</span><span className="ms-1 current ">{ele.product_prize - parseInt((ele.product_prize * ele.product_discount / 100)) } {ele.product_unit} <span className="fw-bold fs-5 ms-2 text-danger">{ele.product_discount}% off</span></span>
                            </Link>
                       
                    </Col>
                        )
                    }
                   
                </Row>



            </Col>
        </Row>
    </Col>





</Row>
</Container> */}