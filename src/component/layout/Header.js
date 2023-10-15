import { Button, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { useContext, useEffect, useState } from 'react';
import { CartLength } from '../../contextApi/Context';
import { addToCartGet, allCategory, searchProduct } from '../../api/Api';
import { HiMiniShoppingCart } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";


export default function Header(props) {
  const { PutData } = useContext(CartLength)
  const [category, setCategory] = useState([{}])
  const [SearchShow, setSearchShow] = useState(false)
  const [search, setSearch] = useState([{}])
  const [cartproduct, setCartProduct] = useState([{}])

  const navigator = useNavigate()


  const categoryList = async () => {
    const res = await allCategory()
    if (res) {
      setCategory(res.categoryList)
    }
  }

  const handelChange = async (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value })
    setSearchShow(true)
    // const res = await searchProduct({...search,[event.target.name]:event.target.value})
  }

  const AddCart = async () => {
    const res = await addToCartGet()


    if (res.status == "success") {
      setCartProduct(res.ress)
    }
  }

  useEffect(() => {
    AddCart()
  }, [props.addId || props.del])

  const handelSubmit = () => {
    console.log(search)
    PutData(search)
    navigator("/searchProduct")


  }
  useEffect(() => {
    categoryList()

  }, [])
  return (
    <>


      {/* <Navbar expand="lg" className="bg-body-tertiary" >
        <Container style={{ height: "70px" }}>
          <Navbar.Brand href="#home">
            <Image style={{ borderRadius: "15px" }} src="http://localhost:3000/image/logo.jpg" width="150" height="75" />

          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                {
                  category.map((ele, index) =>
                    <Link key={index} to={`/${ele._id}`} style={{ textDecoration: "none" }}>
                      <NavDropdown.Item href="#action/3.1" className=''>{ele.categoryName}</NavDropdown.Item>
                    </Link>

                  )
                }
              </NavDropdown>
              <div className="search ms-5 ">
                <input placeholder="Search..." type='search' className='sea ms-5 ' name='product_name' onChange={handelChange} />

                {

                  SearchShow ? <button type="submit" onClick={handelSubmit}>Go</button> : <button type="submit" disabled>Go</button>
                }

              </div>
              <div className='ms-5'>
                <h6 to="/" className='mt-2 fontt21 ms-5'>User Name : ertyuiiiiiii </h6>

              </div>
              <div className='ms-5'>
                <p className='fs-3 ms-5 '><Link to="/addtocart" className='text-dark'><HiMiniShoppingCart /></Link> <span style={{ position: "absolute", bottom: "30px" }} className='fs-6 mb-3 text-danger'>{cartproduct.length}</span></p>

              </div>

            </Nav>

            <Link className='' to="/login" style={{ textDecoration: "none" }}>Login</Link>

          </Navbar.Collapse>


        </Container>
      </Navbar> */}

      {/* <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <div class="container" >
          
          
            <img id="MDB-logo" style={{borderRadius:"10px"}}
              src="http://localhost:3000/image/log.png" alt="MDB Logo"
              draggable="false" height="70" width="150" />
         
          <Image />

         {/* Category */}

          <div class="collapse navbar-collapse" id="navbarSupportedContent">


            <div class="navbar-nav me-5 ">

              <Nav.Link href="/" className='ms-5'>Home</Nav.Link>

              <NavDropdown title="Category" className='ms-4' id="basic-nav-dropdown">
                {
                  category.map((ele, index) =>
                    <Link key={index} to={`/${ele._id}`} style={{ textDecoration: "none" }}>
                      <NavDropdown.Item href="#action/3.1" className=''>{ele.categoryName}</NavDropdown.Item>
                    </Link>

                  )
                }
              </NavDropdown>

            </div>
           
            {/* Search */}

            <form class="d-flex align-items-center w-100 form-search">
              <div class="input-group">

                <input type="search" className="form-controll" placeholder="Search" aria-label="Search" name='product_name' onChange={handelChange} />
                {

                  SearchShow ? <button className='search_btn ' onClick={handelSubmit}><AiOutlineSearch /></button> : <button className='search_btn ' disabled><AiOutlineSearch /></button>
                }
              </div>
            </form>

            <ul class="navbar-nav ms-3">
              <li class="nav-item me-3">
              <div className=''>
                <p className='fs-3  mt-2'><Link to="/addtocart" className='text-dark text-white'><HiMiniShoppingCart /></Link> <span style={{ position: "absolute", bottom: "28px" }} className='fs-6 mb-3 text-danger'>{cartproduct.length}</span></p>

              </div>
              </li>
              <li className='ms-5'>
              <Link  to="/login" style={{ textDecoration: "none",color:"white" }}> <p className=' me-5 mt-4'>Login</p></Link>

              </li>
              {/* <li class="nav-item" style={{ width: "65px" }}>
                <a class="nav-link d-flex align-items-center" href="#!">Sign In</a>
              </li> */}
            </ul>
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}

    </>



  );
}







// <Container className='set' style={{ bottom: "60px" }} >
// <Col md={10} className='m-auto  ' >

//   <Row className=''>
//     <Col md={11} className='m-auto text-center   '>
//     {/* serch_position */}
//       {/* <input  type='search' className='sea ms-4' name='product_name' onChange={handelChange}/>
//      <Button onClick={handelSubmit} style={{height:"32px"}} className='sea2'><AiOutlineSearch/></Button> */}

//       <Col md={7} className=' text-end'>
//         <div class="search ">
//           <input placeholder="Search..." type='search' className='sea ms-5 ' name='product_name' onChange={handelChange} />

//           {

//             SearchShow ? <button type="submit" onClick={handelSubmit}>Go</button> : <button type="submit" disabled>Go</button>
//           }

//         </div>
//       </Col>

//       <Col md={4} className='text-end '>
//         <div className='serch_position2 '>
//           <h6 to="/" className='mt-2 fontt21'>User Name : ertyuiiiiiii </h6>
//         </div>
//         <div>
//         </div>
//       </Col>
//       <Col md={1}>
//         <p className='fs-3  '><Link to="/addtocart" className='text-dark'><HiMiniShoppingCart /></Link> <span style={{ position: "absolute", bottom: "30px" }} className='fs-5 text-danger'>{cartproduct.length}</span></p>

//       </Col>


//     </Col>


//   </Row>
// </Col>

// {/* <Col md={1}>
//    <Link to="" className='fs-4 text-danger'><FiShoppingCart/><span className='add-cart'>{"2"}</span></Link>

//      <Link className='ms-3 ' to="/login" style={{textDecoration:"none"}}>Login</Link>
//    </Col> */}
// </Container>