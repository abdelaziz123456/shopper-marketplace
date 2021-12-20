
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
import SignUp from "./components/SignUp";


function App() {
  
  return (
    
      <BrowserRouter>
      <div className="App">

      
      <Header/>
      




     <Routes>

     <Route path="/" element={<MainContent/>}  />


     <Route path="/shopper-marketplace" element={<MainContent/>}  />

     <Route path="/login" element={<LogIn/>}  />

     <Route path="/signup" element={<SignUp/>}  />
      
      
      
     </Routes>
     
     







      <Footer/>

      </div>
    </BrowserRouter>
   
  );
}

export default App;
