import { Button, Col, Container, Row } from "react-bootstrap";
import Leftheader from "../layout/Leftheader";
import Header from "../layout/Header";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { addProd } from "../../api/Api";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { allCategory } from "../../api/Categoryapi";
import { allSubCategory, subCategoryView } from "../../api/Subcategory";



export default function Addproduct() {
    const [product, setProduct] = useState({})
    const [Categoryselect, setCategoryselect] = useState([{}])
    const [SubCategoryselect, setSubCategoryselect] = useState([{}])
    const [catid, setCatid] = useState()

    const addProdu = async (event) => {
        event.preventDefault()

        const form = new FormData();
        Object.keys(product).forEach(ele => {
            form.append(ele, product[ele])
        })
        const res = await addProd(form)
        
        if (res.status == "sucess") {
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


    const handelChange = async (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
   
        
      
        
        const ress = await subCategoryView([event.target.value])
        console.log(event.target.name + "gg")

        if(event.target.name == "category_id"){
            
        setSubCategoryselect(ress.subCatSelect)

        }
        else{
            console.log("o")
        }
    }

    const handelImage = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.files[0] })

    }
    // console.log(Categoryselect, "curentpage")


    const select = async () => {
        const res = await allCategory()
        if (res) {
            setCategoryselect(res.categoryList)
        }
    }

    const subSelect = async () => {
        const res = await allSubCategory()
        if (res) {
        }
    }

    const re = product.product_prize * 10 / 100
    // console.warn(product.product_prize - re + "ye")
    useEffect(() => {
        select()
        subSelect()

    }, [])
    return (
        <>
            <Header />
            <ToastContainer />
            <Container fluid className="mt-5 p-0">
                <Col md={12}>
                    <Row>
                        <Col md={2} className=" ">
                            <Leftheader />
                        </Col>
                        <Col md={10} className="" >
                            <Col md={9} className=" m-auto">

                                <h1 className="text-center ">Add Product</h1>
                                <form onSubmit={addProdu}>

                                    <Row className="justify-content-between">
                                        <Col md={5} className="">

                                            <Form.Select className="mt-4" aria-label="Default select example" name="category_id" onChange={handelChange}>
                                                <option name="product_title" >Select Category Title</option>

                                                {
                                                    Categoryselect.map((ele, index) =>
                                                        <>
                                                            <option onChange={handelChange} value={ele._id} > {ele.categoryTitle}</option>
                                                        </>
                                                    )
                                                }
                                            </Form.Select>



                                            <FloatingLabel className=" mt-4" label="Product Name">
                                                <Form.Control type="text" placeholder="text" name="product_name" onChange={handelChange} />
                                            </FloatingLabel>



                                            <Form.Select className=" mt-4" aria-label="Default select example" name="product_unit" onChange={handelChange}>
                                                <option>Select Unit</option>
                                                <option name="product_unit" onChange={handelChange}>Kg</option>
                                                <option name="product_unit" onChange={handelChange}>Liter</option>
                                                <option name="product_unit" onChange={handelChange}>Durgen</option>


                                            </Form.Select>

                                            <FloatingLabel className=" mt-4" label="Product Description">
                                                <textarea className="note mt-5 ms-1" style={{ height: "80px", width: "300px" }} name="product_description" onChange={handelChange}> </textarea>
                                                {/* <Form.Control className="note" placeholder="text" name="product_description" onChange={handelChange} /> */}
                                            </FloatingLabel>

                                            <FloatingLabel className=" mt-4" >
                                                <Form.Control type="file" placeholder="text" name="product_img" onChange={handelImage} />
                                            </FloatingLabel>

                                        </Col>
                                        <Col md={5} className="">

                                            <Form.Select className="mt-4" aria-label="Default select example" name="sub_category_id" onChange={handelChange}>
                                                <option name="product_subCat" >Select Sub-Category Title</option>

                                                {
                                                    SubCategoryselect?.map((ele, index) =>
                                                        <>
                                                            <option name="product_subCat" onChange={handelChange} value={ele._id}>{ele.subCatTital}</option>
                                                        </>
                                                    )
                                                }
                                            </Form.Select>

                                            <FloatingLabel className=" mt-4" label="Product Prize">
                                                <Form.Control type="text" placeholder="text" name="product_prize" onChange={handelChange} />
                                            </FloatingLabel>



                                            <FloatingLabel className=" mt-4" label="Product Brand">
                                                <Form.Control type="text" placeholder="text" name="product_brand" onChange={handelChange} />
                                            </FloatingLabel>

                                            <FloatingLabel className=" mt-4" label="Product Status">
                                                <Form.Control type="text" placeholder="text" name="product_status" onChange={handelChange} />
                                            </FloatingLabel>

                                            <FloatingLabel className=" mt-4" label="Product Rating">
                                                <Form.Control type="number" placeholder="text" name="product_rating" onChange={handelChange} />
                                            </FloatingLabel>

                                            <FloatingLabel className=" mt-4" label="Discount">
                                                <Form.Control type="number" placeholder="text" name="product_discount" onChange={handelChange} />
                                            </FloatingLabel>

                                        </Col>
                                    </Row>
                                    <div className="text-center mt-2">
                                        <Button className="mt-4 ms-5 " type="submit">Submit</Button>
                                    </div>
                                </form>
                            </Col>
                        </Col>
                    </Row>
                </Col>

            </Container>
        </>
    )
}