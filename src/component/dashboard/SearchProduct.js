import { Link, useParams } from "react-router-dom";
import Header from "../layout/Header";
import { getProductSubCategory, getSingelProduct, searchProduct } from "../../api/Api";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { CartLength } from "../../contextApi/Context";


export default function Searchproduct(){
    const [subCateories, setSubCateories] = useState([{}])
    const {searchData} = useContext(CartLength)






    const getProduct = async () => {

        const res = await searchProduct(searchData)
        if (res) {
            setSubCateories(res.front_product)
        }
    }


    useEffect(() => {
        getProduct()
    }, [searchData])
    return(
        <>
         <Header  />
            <Container fluid>

                <Row>
                    <Col md={12}>
                        <Row>

                            <Col md={9} className=" mt-5 m-auto" >
                                <Row>
                                    {
                                        subCateories?.map((ele, index) =>
                                            <Col md={3} key={index} className="mt-3 " style={{ cursor: "pointer" }}>
                                                <div >
                                                    {/*style={{width:"99%"}} border:"1px solid yellow" */}
                                                    <div className="shadow-lg p-3 ">
                                                        <Link to={`/${ele.product_name}/${ele._id}`} className="text-decoration-none text-black ">

                                                            <div className="mt-2 text-center  mb-4  ">
                                                                <Image src={ele.product_img} width="80%" height="200" />
                                                            </div>
                                                        </Link>
                                                        <div className="   shadow-lg p-3 " style={{ width: "100%" }}>
                                                            <span className=" aign">{ele.product_name}</span>
                                                            <br />
                                                            <button className=" button" >{ele.product_rating}<AiFillStar className="ms-2" style={{ color: "yellow" }} /></button>
                                                            <br />
                                                            <span className="fonts  " >MRP : </span>
                                                            <span className="cut" style={{ fontSize: "18px" }}>{ele.product_prize}</span>
                                                            <span className="ms-1 current " style={{ fontSize: "18px" }}>{ele.product_prize - parseInt((ele.product_prize * ele.product_discount / 100))} <span style={{ fontSize: "15px" }}>{ele.product_unit}</span>
                                                                <span className="fw-bold   ms-1 text-danger" style={{ fontSize: "17px" }} >{ele.product_discount}% off</span></span>
                                                            <Button className="mt-3" style={{ backgroundColor: "green", border: 'none' }}>Add to Cart</Button>

                                                        </div>

                                                    </div>


                                                </div>

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