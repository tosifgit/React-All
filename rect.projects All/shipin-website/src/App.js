import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Header from './Components/Navbar'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar';

import About from './Pages/About';
import Contact from './Pages/Contact';
import Feature from './Pages/Feature';
import Index from './Pages/Index';
import Price from './Pages/Price';
import Quote from './Pages/Quote';
import Service from './Pages/Service';
import Team from './Pages/Team';
import Testimonial from './Pages/Testimonial';
import Function_State from './States/Function_State';
import Mytest from './States/Mytest';
import Class_State from './States/Class_State';
import Mprops from './Pages/Mprops';

import IndexNew from './Admin-Components/IndexNew';
import Fts from './Fts';
import Rbootstrap from './Bootstrap/Rbootstrap';


export default class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Routes>
        {/* 
            <Route path='/' element={<><Navbar /><Index/><Footer/></>} ></Route>
            <Route path='/about' element={<><Navbar /><About title="About"/><Footer/></>} ></Route>
            <Route path='/contact' element={<><Navbar /><Contact/><Footer/></>} ></Route>
            <Route path='/feature' element={<><Navbar/><Feature/><Footer/></>} ></Route>
            <Route path='/price' element={<><Navbar/><Price/><Footer/></>} ></Route>
            <Route path='/quote' element={<><Navbar/><Quote/><Footer/></>} ></Route>
            <Route path='/service' element={<><Navbar/><Service/><Footer/></>} ></Route>
            <Route path='/team' element={<><Navbar /><Team price="99" img='' title="Team"/><Footer/></>} ></Route>
            <Route path='/testimonial' element={<><Navbar/><Testimonial/><Footer/></>} ></Route> */}

        {/* 
        <Mytest/>
        <Class_State/> 
        <Function_State/>
        <Route element={<><Fts/></>} ></Route>
      */}
      <Route element={<><Rbootstrap/></>} ></Route>
      </Routes>
      </BrowserRouter>

    )
  }
}