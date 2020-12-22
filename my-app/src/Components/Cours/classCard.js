// Composant ClassCard
// contient intitulé du cour
// enseignement 
import styles from "./classCard.module.css"

const ClassCard= (props)=>{
    //Destructuration de props
    
    const {titre,enseignement,image,nomProfesseur,couleur} = props
    return(
        <div >
         
        <div  className={styles.classCard} >
           <div className={couleur}>
            <h1 className= "text-center ">{titre}</h1>
            
            
            <img className= "p-8" src={image} alt=""/>
            <p>{enseignement}</p>
            <p>{nomProfesseur}</p>
            


            </div> 
            
            
        </div>
           
        </div>


       
    )
    
}

export default ClassCard