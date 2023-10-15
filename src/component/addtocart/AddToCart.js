import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Header from "../layout/Header";
import { addToCartDelete, addToCartGet, payment, verify } from "../../api/Api";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxCross2 } from "react-icons/rx";
import Footer from "../layout/Footer";
import axios from "axios";

export default function AddToCart() {
    const [cartproduct, setCartProduct] = useState([{}])
    const [del, setDel] = useState("")
    const [totalCart, setTotalcart] = useState("")


    // const initpayment = (res) => {
    //     // console.log(res.order.amount)
    //     const option = {
    //         Key: "rzp_test_XStMIgOl4FX4FW",
    //         amount: res.order.amount,
    //         currency: "INR",
    //         order_id: res.order.id,
    //         // handler:function(response){
    //         //     alert(response.razorpay_payment_id);
    //         //     alert(response.razorpay_order_id);
    //         //     alert(response.razorpay_signature)
    //         // }

    //         handler: async (response) => {
    //             try {
    //                 let res = await verify(response)
    //                 // console.log(res)
    //             } catch (error) {
    //                 console.log(error)
    //             }
    //         },
    //         theme: {
    //             color: "red"
    //         }

    //     };
    //     const rzp1 = new window.Razorpay(option);
    //     rzp1.open();
    // }


    const handeopen =(data) => {
        const options = {
            Key: "rzp_test_XStMIgOl4FX4FW",
            amount: data.amount,
            currency: data.currency,
            name: "Fresh Fruits",
            order: data.id,
            handler: async(response)=>{
                console.log(response)
                try{
                    const resData = await verify(response)
                    console.log(resData + "dfcgvhbjnkml")
                }catch(error){
                    console.log(error + "error")

                }
            }
          

        }
       

        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    const handelPayment = async (id) => {
        const res = await payment({ amount: id })
        
        handeopen(res.order)


    }



    const initialValue = 0;
    const sumWithInitial = cartproduct.reduce((accumulator, currentValue) => parseFloat(accumulator) + parseInt(currentValue.products?.product_prize), initialValue);



    const initialValu = 0;
    const sumDiscount = cartproduct.reduce((accumulator, currentValue) => parseFloat(accumulator) + parseInt(currentValue.products?.product_discount), initialValu);


    const initialVa = 0;
    const totallll = cartproduct.reduce((accumulator, ele) => parseFloat(accumulator) + parseInt(ele.products?.product_prize - parseInt((ele.products?.product_prize * ele.products?.product_discount / 100))), initialVa);


    // const totallll = cartproduct.map(ele=>{
    //     const a =  ele.products?.product_prize - parseInt((ele.products?.product_prize * ele.products?.product_discount / 100))
    //     return 

    // }

    //     )

    // const totalVal = sumWithInitial * sumDiscount / 100
    // ele.product_prize - parseInt((ele.product_prize * ele.product_discount / 100))
    // console.log(sumWithInitial);

    // console.log(cartproduct.map(e=>e.products.product_prize))
    //  const re = cartproduct.reduce()

    const AddCart = async () => {
        const res = await addToCartGet()
        if (res.status == "success") {
            setCartProduct(res.ress)

        }
    }
    const handelDelete = async (deleteId) => {
        const res = await addToCartDelete(deleteId)

        if (res.status == "success") {
            AddCart()

            setDel(deleteId)
            toast.success(res.message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
        else {
            toast.error(res.message, {
                position: "top-center",
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
        AddCart()

    }, [])
    // addToCartGet
    return (
        <>
            <Header del={del} />
            <ToastContainer />


            <Container>



                <section class="shopping-cart dark">

                    <Container >
                        <div class="block-heading">
                            <h2>Shopping Cart</h2>
                        </div>

                        <Container>

                            <Row>

                                <div class="col-md-12 col-lg-8">
                                    <div class="items">
                                        <div class="product">

                                            <Row>
                                                {
                                                    cartproduct.map((ele, index) =>
                                                        <>
                                                            <Col md={3} className="shadow p-3 mb-3 bg-body-tertiary rounded text-center">
                                                                <Image src={ele.products?.product_img} width="100" height="80" />


                                                            </Col>
                                                            <Col md={8}>

                                                                <div class="info shadow p-3 mb-3 bg-body-tertiary rounded">
                                                                    <Row>
                                                                        <Col md={5}>
                                                                            <div class="product-name">
                                                                                <h1 className="addtocart_text_font">{ele.products?.product_name}</h1>
                                                                                <div class="product-info">
                                                                                    <div>Brand : <span class="value">{ele.products?.product_brand}</span></div>
                                                                                    <div>Discount:
                                                                                        <span className="cut ms-1" style={{ fontSize: "18px" }}>Rs {ele.products?.product_prize}</span>
                                                                                        <span className="ms-1 current " style={{ fontSize: "18px" }}>
                                                                                            <span className="fw-bold   ms-1 text-danger" style={{ fontSize: "17px" }} >{ele.products?.product_discount}% off</span></span>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                        <Col md={4}>
                                                                            <label for="quantity">Quantity:</label>
                                                                            {/* <input id="quantity" type="number" value="1" class="form-control quantity-input" /> */}
                                                                            <input id="quantity" type="number" style={{ width: "20px" }} class="form-control" />
                                                                        </Col>


                                                                        <Col md={2} >
                                                                            <label for="quantity">Prize :</label>
                                                                            <br />
                                                                            <span className="price">{
                                                                                <span className="ms-1 current " style={{ fontSize: "18px" }}> Rs {ele.products?.product_prize - parseInt((ele.products?.product_prize) * ele.products?.product_discount) / 100}
                                                                                    <span className="fw-bold   ms-1 text-danger" style={{ fontSize: "17px" }} ></span></span>
                                                                            }
                                                                            </span>

                                                                        </Col>
                                                                        <Col md={1} className="text-center">


                                                                            <button className=" border-0 mt-2" onClick={() => handelDelete(ele._id)}><RxCross2 /></button>


                                                                        </Col>
                                                                        {/* <div class="col-md-3 price">
                                                                
                                                                <span>$120</span>
                                                            </div> */}

                                                                    </Row>
                                                                </div>


                                                            </Col>
                                                        </>
                                                    )
                                                }



                                            </Row>

                                        </div>



                                    </div>
                                </div>



                                <div class="col-md-12 col-lg-4">
                                    <div class="summary">
                                        <h3>Summary</h3>
                                        <div class="summary-item"><span class="text"> Total Amount</span><span class="price">{sumWithInitial}</span></div>
                                        <div class="summary-item"><span class="text">Total Discount</span><span class="price">{sumDiscount}%</span></div>
                                        <div class="summary-item"><span class="text">Shipping Charge</span><span class="price">Free</span></div>
                                        <div class="summary-item"><span class="text">Total</span><span class="price">{totallll}</span></div>
                                        <div className="text-center ms-2">
                                            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={() => handelPayment(totallll)}>Order Now</button>

                                        </div>
                                    </div>
                                </div>


                            </Row>


                        </Container>
                    </Container>
                </section>

            </Container>
            <Footer />

        </>
    )
}