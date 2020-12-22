import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/NavBar"
//import ClassCard from './Components/Cours/classCard';
import ClassCardContainer from './Components/Cours/classCardContainer';

import BackgroundColor from "./Components/Cours/Background"

function App() {
  return (
    <> 
    <Navbar/>
    <ClassCardContainer/>
    <BackgroundColor bgcouleur = "bg-green-600"/>
    
    
    </>  

          
  );
}

export default App;
