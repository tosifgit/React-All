import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header'; 

import Index from './Pages/Index';
import Login from './Pages/Login';
import Side from './Pages/Side';



function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /><Side/><Index/></>} ></Route>
          <Route path='/login' element={<><Login /></>} ></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
