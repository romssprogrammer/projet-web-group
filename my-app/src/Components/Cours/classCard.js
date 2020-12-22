// Composant ClassCard
// contient intitulé du cour
// enseignement 
import styles from "./classCard.module.css"


const ClassCard= (props)=>{
    //Destructuration de props
    
    const {titre,enseignement,image,nomProfesseur,couleur} = props
    return(
        
         
        <div >
           <div className=   {couleur}>
            <h1 className= "text-center ">{titre}</h1>
            
            
            <img className= {styles.classCard}  src={image} alt=""/>
            <div class="font-bold text-xl mb-2"> 
            <p>{enseignement}</p>
            </div>
            <p>{enseignement}</p>
            <p>{nomProfesseur}</p>
            


            </div> 
            
            
        
           
        </div>


       
    )
    
}

export default ClassCard