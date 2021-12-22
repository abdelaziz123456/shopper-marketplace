
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import LogIn from './components/LogIn';
import MainContent from "./components/MainContent";
import ProductDetails from "./components/ProductDetails";
import SignUp from "./components/SignUp";


function App() {
  

  // category setter

  const [category,setCategory]=useState('all')


  return (
    
      <BrowserRouter>
      <div className="App">

      
      <Header  setCategory={setCategory}/>
      




     <Routes>



     <Route path="/" element={<MainContent category={category}/>}  />


     <Route path="/shopper-marketplace" element={<MainContent category={category}/>}  />

     <Route path="/login" element={<LogIn/>}  />

     <Route path="/signup" element={<SignUp/>}  />


     <Route path='/product-details/:id'  element={<ProductDetails/>} />

      
      
      
     </Routes>
     
     







      <Footer/>

      </div>
    </BrowserRouter>
   
  );
}

export default App;
