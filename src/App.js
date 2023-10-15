import './App.css';
import '../src/component/about/about.css';
import '../src/component/layout/header.css';
import '../src/component/addtocart/addtocart.css';
import '../src/component/categories/category.css';
import '../src/component/terms & conditions/terms.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/loginpart/Login';
import Signin from './component/loginpart/Signin';
import Mainpage from './component/dashboard';
import Main from './contextApi/Main';
import Subcategory from './component/sub-categories/Subcategory';
import Searchproduct from './component/dashboard/SearchProduct';
import ViewSingelProduct from './component/sub-categories/ViewSingelProduct';
import About from './component/about/About';
import TermsAndConditions from './component/terms & conditions/TermsAndConditions';
import AddToCart from './component/addtocart/AddToCart';

function App() {
  return (
  <Router>
    <Main>

    
  <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signin' element={<Signin/>}></Route>
    <Route path='/' element={<Mainpage/>}></Route>
    {/* <Route path='/mainpage' element={<Mainpage/>}> */}

    {/* </Route> */}
    
    <Route path=':sub_category_id' element={<Subcategory/>}>
    </Route>
    <Route path=':name/:id' element={<ViewSingelProduct/>}></Route>
    <Route path='/searchProduct' element={<Searchproduct/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/tearmsandconditions' element={<TermsAndConditions/>}></Route>
    <Route path='/addtocart' element={<AddToCart/>}></Route>

    
  </Routes>
  </Main>
  </Router>
  );
}

export default App;
