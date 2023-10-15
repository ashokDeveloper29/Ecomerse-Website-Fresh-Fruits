import { useParams } from "react-router-dom"
import Header from "../layout/Header"
import { getSingelProduct } from "../../api/Api"
import { useEffect, useState } from "react"
import { Button, Col, Container, Image, Row } from "react-bootstrap"
import { MdSell } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Footer from "../layout/Footer"


export default function ViewSingelProduct() {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const SingleProduct = async () => {
        const res = await getSingelProduct(id)
        if (res) {
            setProduct(res.upade)
        }
    }
    useEffect(() => {
        SingleProduct()
    }, [])
    console.log(id)
    return (
        <>
            <Header />
            <Container>

                <Col md={12} >
                    <Row>

                        <Col md={5} className="text-center">
                            <Image className="mt-5" src={product.product_img} width="80%" height="400" />
                            {/* <Button className="bg-success mt-2" >ADD TO CART</Button> */}
                        </Col>
                        <Col md={7} className=" p-2 text-dark bg-opacity-10 my-5 ">
                            <h3 className="fontss">{product.product_name}</h3>
                            <button className=" button2 texto" >{product.product_rating}<AiFillStar className="ms-2" style={{ color: "yellow" }} /></button>
                            <span className="ms-2" style={{ color: "gray", fontWeight: "bold" }}>Ratting</span>

                            <br />
                            <p className="mt-2" style={{ fontSize: "20px", fontWeight: "500" }}>Quantity : {product.product_quantity} {product.product_unit}</p>

                            <p className="">   <span className="text-success fs-4 ">MRP : </span>
                                <span className="fs-4 ">{product.product_prize - parseInt((product.product_prize * product.product_discount / 100))}</span>
                                <span className="cut fs-5 ms-2">{product.product_prize}</span>
                                <span className="text-success ms-2" style={{ fontSize: "18px" }}>{product.product_discount}% off</span> </p>

                            <p className=" fs-2 ">{product.product_stock}</p>

                            <ul style={{ listStyleType: "none", padding: "0" }}>
                                <li className="ms-2"><MdSell /> Dicount for {product.product_discount}%</li>
                                <li className="ms-2"><MdSell /> Delivery chage off</li>
                                <li className="ms-2"><MdSell /> Bank Offer Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000</li>
                            </ul>



                        </Col>
                    </Row>

                </Col>
            </Container>
      <Footer/>
        
        </>
    )
}