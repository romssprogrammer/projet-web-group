import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/navBar/navBar"
//import ClassCard from './Components/Cours/classCard';
import ClassCardContainer from './Components/Cours/classCardContainer';
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./Routes"

import Footer from "./Components/Footer/Footer"
//import ClassCardTest from './Components/Cours/classCardTest';

function App() {
  return (
    <> 
    <Router>

    <Navbar/>
    <Routes/>
    
    </Router>
    {/* <Footer bgcouleur =  "relative bg-indigo-300 w-600 h-12  " /> */}
    
    
    
    </>  

          
  );
}

export default App;
