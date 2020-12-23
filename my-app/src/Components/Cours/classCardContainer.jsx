import ClassCard from "./classCard"
import text from "../../Data"
//import Background from "../Footer/Background"

const ClassCardContainer = ()=>{
    // const imageSize= ClassCard.attribut ??
   
    return(
        <div >
        <div className= "mt-10 mx-50 flex items-center">
            
            
            <div className ="mr-9 p-8 "> <ClassCard nomProfesseur= " Tournesol" titre="Dessin" enseignement= {text} image ="elfe_lady.png" couleur="bg-blue-400 "/> </div>
            <div className = "mr-8 " ><ClassCard nomProfesseur= " Wendel Claire" titre="Sculpture" enseignement={text} image ="sisters-claire-wendling-signe.jpg" couleur ="bg-yellow-500" /></div>
            <div className ="mr-8"><ClassCard nomProfesseur= " Robin Hoob" titre="Peinture" enseignement={text} image ="elfe_lady.png" couleur = "bg-indigo-500 " /></div>
            <div className ="mr-8" ><ClassCard nomProfesseur= "jonh Doe" titre="Gravure" enseignement={text} image ="elfe_lady.png" couleur = "bg-gray-400 "/></div>
           
           
        </div>
        </div>

    )
}



export  default ClassCardContainer