import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Aside from './Component/Aside';
import ManageProduct from './Pages/Product/ManageProduct';
import Login from './Pages/Login';
import Manageempoloee from './Pages/Emploee/Manageempoloee';
import Manage_categories from './Pages/Catagorys/Manage_cat';
import New from './Pages/New';
import Manage_cat from './Pages/Catagorys/Manage_cat';
import Dashboard from './Pages/Dashboard';
import Manage_cart from './Pages/Manage_cart';
import Manage_order from './Pages/Manage_order';
import Manage_payment from './Pages/Manage_payment';
import Manage_contact from './Pages/Manage_contact';
import Manage_customer from './Pages/Manage_customer';
import Add_emploee from './Pages/Emploee/Add_emploee';
import Add_product from './Pages/Product/Add_product';
import Add_cat from './Pages/Catagorys/Add_cat';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<><Login/></>}></Route>
            <Route path='/dashboard' element={<><Header/><Aside/><Dashboard/></>}></Route>
            <Route path='/add_amploee' element={<><Header/><Aside/><Add_emploee/></>}></Route>
            <Route path='/manageempoloee' element={<><Header/><Aside/><Manageempoloee/></>}></Route>
            <Route path='/add_product' element={<><Header/><Aside/><Add_product/></>}></Route>
            <Route path='/manageProduct' element={<><Header/><Aside/><ManageProduct/></>}></Route>
            <Route path='/manage_cat' element={<><Header/><Aside/><Manage_categories/></>}></Route>
            <Route path='/add_cat' element={<><Header/><Aside/><Add_cat/></>}></Route>
            <Route path='/manage_cart' element={<><Header/><Aside/><Manage_cart tt="abc"/></>}></Route>
            <Route path='/manage_order' element={<><Header/><Aside/><Manage_order/></>}></Route>
            <Route path='/manage_payment' element={<><Header/><Aside/><Manage_payment/></>}></Route>
            <Route path='/manage_contact' element={<><Header/><Aside/><Manage_contact/></>}></Route>
            <Route path='/manage_customer' element={<><Header/><Aside/><Manage_customer/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;