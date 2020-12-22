import ClassCard from "./classCard"
import text from "../../Data"
const ClassCardContainer = ()=>{
   
    return(
        
        <div className= "mx-auto flex items-center">
            <div className = "mr-8 "> <ClassCard  titre="dessin" enseignement= "blablalblblablllalblablab" image ="elfe_lady.png" couleur="bg-blue-400 rounded-lg"/> </div>
            <div className ="mr-8"><ClassCard titre="Sculpture" enseignement="blablalblblablllalblablab" image ="sisters-claire-wendling-signe.jpg" couleur ="bg-yellow-500 rounded-lg" /></div>
            
            <div className ="mr-8"><ClassCard titre="Peinture" enseignement={text} image ="elfe_lady.png" couleur = "bg-indigo-500"/></div>
            <div className ="mr-8" ><ClassCard titre="Gravure" enseignement="blablalblblablllalblablab" image ="elfe_lady.png"/></div>
           
           
        </div>

    )
}



export  default ClassCardContainer