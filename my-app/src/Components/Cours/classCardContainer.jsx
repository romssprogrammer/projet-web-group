import ClassCard from "./classCard"
import text from "../../Data"
//import Footer from "../Footer/Footer"
//import Background from "../Footer/Background"

const ClassCardContainer = ()=>{
    // const imageSize= ClassCard.attribut ??
   
    return(
        <div >
        <div className= " mx-50 flex items-center">
             
            
            <div className ="m-8 "> <ClassCard nomProfesseur= " Tournesol" titre="Dessin" enseignement= {text} image ="elfe_lady.png" couleur="bg-blue-400 rounded-lg"/> </div>
            <div className = "mr-8 "><ClassCard nomProfesseur= " Wendel Claire" titre="Sculpture" enseignement={text} image ="sisters-claire-wendling-signe.jpg" couleur ="bg-yellow-500 rounded-lg" /></div>
            <div className ="mr-8"><ClassCard nomProfesseur= " Robin Hoob" titre="Peinture" enseignement={text} image ="elfe_lady.png" couleur = "bg-indigo-400 rounded-lg " /></div>
            <div className ="mr-8" ><ClassCard nomProfesseur= "jonh Doe" titre="Gravure" enseignement={text} image ="elfe_lady.png" couleur = "bg-gray-400 rounded-lg "/></div>
            
        </div>
        
       

        
       </div>
       
        

    )
}



export  default ClassCardContainer