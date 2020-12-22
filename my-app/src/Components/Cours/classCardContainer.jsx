import ClassCard from "./classCard"
import text from "../../Data"

const ClassCardContainer = ()=>{
    // const imageSize= ClassCard.attribut ??
   
    return(
        
        <div className= "mx-50 flex items-center">
            <div className ="mr-8 "> <ClassCard  titre="dessin" enseignement= {text} image ="elfe_lady.png" couleur="bg-blue-400 rounded-lg"/> </div>
            <div className ="mr-8"><ClassCard titre="Sculpture" enseignement={text} image ="sisters-claire-wendling-signe.jpg" couleur ="bg-yellow-500 rounded-lg" /></div>
            <div className ="mr-8"><ClassCard titre="Peinture" enseignement={text} image ="elfe_lady.png" couleur = "bg-indigo-500 rounded-lg" /></div>
            <div className ="mr-8" ><ClassCard titre="Gravure" enseignement={text} image ="elfe_lady.png" couleur = "bg-gray-400 rounded-lg"/></div>
           
           
        </div>

    )
}



export  default ClassCardContainer