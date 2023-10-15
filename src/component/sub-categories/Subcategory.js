import { Link, useParams } from "react-router-dom";
import Header from "../layout/Header";
import { addToCartApi, allCategory, getProductSubCategory, getSingelProduct } from "../../api/Api";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../layout/Footer";



export default function Subcategory() {
    const [subCateories, setSubCateories] = useState([{}])
    const [adid, setadId] = useState("")
    const { sub_category_id } = useParams()
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

    const getSubCat = async () => {

        const res = await getProductSubCategory(sub_category_id)
        if (res) {

            setSubCateories(res.front_product)

        }
    }


    const handelAddCart = async (addId, quantity) => {
        
        setadId(addId)

        const res = await addToCartApi({ product_id: addId, product_quantity: quantity })
        

        if (res.status == "success") {
            toast.success(res.message, {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }

    useEffect(() => {
        getSubCat()
    }, [sub_category_id])



    return (
        <>
            <Header addId={adid} />
            <Container fluid>

                <Row >
                    <Col md={12} className="">
                        <Row >

                            <Col md={2} className="mt-5 m-auto ">
                                <div className="mt-5">
                                    <p className="borde ms-3">Brand</p>
                                </div>
                                <div>
                                    <h6 className='ms-4 ' style={{ color: "gray" }}>{subCateories[0].product_brand} {`(${subCateories.length} items) `}</h6>


                                </div>

                                <div className="mt-4">
                                    <p className="borde ms-4">Category</p>

                                    <div>
                                        {
                                            category.slice(0, 4).map((ele, index) =>

                                                <Link to={`/${ele._id}`} style={{ textDecoration: "none", color: "gray" }}>
                                                    <h6 key={index} className='ms-5'>{ele.categoryName}</h6>
                                                </Link>

                                            )
                                        }

                                    </div>

                                    <div>

                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="borde ms-3">Rating</p>



                                    {/* <div>
                                        <input type="checkbox" value="Fresho" name="Fresho" />
                                        <label className="ms-2 frutfont">More than 25% (2)</label>
                                    </div> */}

                                    <div>

                                    </div>
                                </div>




                            </Col>

                            <Col md={9} className=" mt-5 m-auto " >
                                <p className="bordee ms-2">All Products</p>

                                <Row>

                                    {
                                        subCateories?.map((ele, index) =>
                                            <Col md={3} key={index} className="mt-3 " style={{ cursor: "pointer" }} data-aos="fade-left">
                                                <div >
                                                    {/*style={{width:"99%"}} border:"1px solid yellow" */}
                                                    <div className="shadow-lg p-3 ">
                                                        <Link to={`/${ele.product_name}/${ele._id}`} className="text-decoration-none text-black ">

                                                            <div className="mt-2 text-center  mb-4  ">
                                                                <Image src={ele.product_img} width="80%" height="200" />
                                                            </div>
                                                        </Link>
                                                        <div className="   shadow-lg p-3 " style={{ width: "100%" }}>
                                                            <span className=" aign" style={{ textTransform: "capitalize" }}>{ele.product_name}</span>
                                                            <br />

                                                            <button className=" button" >{ele.product_rating}<AiFillStar className="ms-2" style={{ color: "yellow" }} /></button>
                                                            <br />
                                                            <span className=" aign" style={{ fontSize: "15px", fontWeight: "550" }}>Quantity : {ele.product_quantity} {ele.product_unit}</span>

                                                            <br />

                                                            <span className="fonts  " >MRP : </span>
                                                            <span className="cut" style={{ fontSize: "18px" }}>{ele.product_prize}</span>
                                                            <span className="ms-1 current " style={{ fontSize: "18px" }}>{ele.product_prize - parseInt((ele.product_prize * ele.product_discount / 100))} <span ></span>
                                                                <span className="fw-bold   ms-1 text-danger" style={{ fontSize: "17px" }} >{ele.product_discount}% off</span></span>
                                                            <Button className="mt-3" style={{ backgroundColor: "green", border: 'none' }} onClick={() => handelAddCart(ele._id, ele.product_quantity)}>Add to Cart</Button>

                                                        </div>

                                                    </div>


                                                </div>
                                                <ToastContainer />
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />

        </>
    )
}






