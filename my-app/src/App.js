import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/NavBar"
//import ClassCard from './Components/Cours/classCard';
import ClassCardContainer from './Components/Cours/classCardContainer';

import Footer from "./Components/Footer/Footer"
//import ClassCardTest from './Components/Cours/classCardTest';

function App() {
  return (
    <> 
    <Navbar/>
    <Footer bgcouleur =  "relative bg-indigo-300 w-600 h-12  " />
    <ClassCardContainer/>
    <Footer  adresse= " 14, rue Icares 75006 Paris Tel: 01 47 00 50 00" image = "Home_96px.png"text = "Où nous trouver : " bgcouleur = " mt-50 mx-50 flex items-center relative bg-indigo-300 w-500 h-80 "/>
    
    
    </>  

          
  );
}

export default App;
