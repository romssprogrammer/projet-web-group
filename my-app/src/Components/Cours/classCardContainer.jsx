import ClassCard from "./classCard"
//import text from "/../Data"
const ClassCardContainer = ()=>{
   
    return(
        
        <div className= "w-2/3 h-screen mx-auto flex items-stretch">
            <div className ="mr-8"> <ClassCard titre="dessin" enseignement="" image ="elfe_lady.png" couleur="bg-blue-400 rounded-lg"/> </div>
            <div className ="mr-8"><ClassCard titre="Sculpture" enseignement="" image ="elfe_lady.png" couleur ="bg-yellow-500 rounded-lg" /></div>
            <div className ="mr-8"><ClassCard titre="Peinture" enseignement="" image ="elfe_lady.png" couleur = "bg-indigo-500"/></div>
            <div className ="mr-8" ><ClassCard titre="Gravure" enseignement="" image ="elfe_lady.png"/></div>
           
           
        </div>

    )
}



export  default ClassCardContainer