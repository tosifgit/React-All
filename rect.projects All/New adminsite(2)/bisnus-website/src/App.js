import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Main_props from 'Main_props.jsx';
import Header from './Components/Header';
import Index from './Pages/Index';
import Foooter from './Components/Foooter';
// import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <><Header/><Index/><Foooter/></> }></Route>
          <Route path='/about' element={ <><Header/><About/><Foooter/></> }></Route>
          <Route path='/contact' element={ <><Header/><Contact/><Foooter/></> }></Route>
          <Route path='/gallery' element={ <><Header/><Gallery/><Foooter/></> }></Route>
          <Route path='/services' element={ <><Header/><Services/><Foooter/></> }></Route>
          {/* <Main_props/> */}
        </Routes>
      </BrowserRouter>
      <h1>hi i am</h1>
      
    </div>
    
  );
}

export default App;