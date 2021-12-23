
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import FavItems from "./components/FavItems";
import Footer from './components/Footer';
import Header from './components/Header';
import LogIn from './components/LogIn';
import MainContent from "./components/MainContent";
import ProductDetails from "./components/ProductDetails";
import SignUp from "./components/SignUp";


function App() {

  //Login setter

  const [login,setLogin]=useState(true);

  

  // category setter

  const [category,setCategory]=useState('all');



  //add favourite item 

  const [favList,setFavList]=useState([])



  return (
    
      <BrowserRouter>
      <div className="App">

      
      <Header  setCategory={setCategory} login={login} setLogin={setLogin}/>
      




     <Routes>



     <Route path="/" element={<MainContent category={category}/>}  />


     <Route path="/shopper-marketplace" element={<MainContent category={category}/>}  />

     <Route path="/login" element={<LogIn/>}  />

     <Route path="/signup" element={<SignUp/>}  />


     <Route path='/product-details/:id'  element={<ProductDetails login={login}    setFavList={setFavList} favList={favList}/>}  />


     <Route path="/favitems" element={<FavItems favList={favList} setFavList={setFavList}/>}  />

      
      
      
     </Routes>
     
     







      <Footer/>

      </div>
    </BrowserRouter>
   
  );
}

export default App;
