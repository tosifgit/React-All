
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Testimonial from "./Pages/Testimonial";
import Header_slide from "./Components/Header_slide";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* first example ======================================*/}
        <Route path="/" element={ <>

        <Header_slide/> <Index/> <Footer/>  
        
        </> }></Route>
          {/* over============================================= */}

        <Route path="/about" element={ <><Header/> <About/> <Footer/>  </> }></Route>
        <Route path="/contact" element={ <><Header/> <Contact/> <Footer/>  </> }></Route>
        <Route path="/product" element={ <><Header/> <Product/> <Footer/>  </> }></Route>
        <Route path="/testimonial" element={ <><Header/> <Testimonial/> <Footer/>  </> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
