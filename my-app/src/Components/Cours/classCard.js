// Composant ClassCard
// contient intitulé du cour
// enseignement 
import styles from "./classCard.module.css"



const ClassCard= (props)=>{
    //Destructuration de props
    //const transfimage = "transform scale-75"
    //styles.classCard
    
    const {titre,enseignement,image,nomProfesseur,couleur,imgSize} = props
    return(
        
       


        
        
         
        <div onMouseEnter >
           <div className=   {couleur}>

           
            <img className src={image} alt=""/>
            <div class="font-bold text-xl mb-2"> 
            <h1 className= "text-center ">{titre}</h1>
            
            </div>
            <p className = "text-center " >Professeur : {nomProfesseur}</p>
            <p className= "text-center ">{enseignement}</p>
            


            </div> 
            
            
        
           
        </div>


        
    )
    
}

export default ClassCard