// Composant ClassCard
// contient intitulé du cour
// enseignement 
import styles from "./ClassCard.module.css"

const ClassCard= (props)=>{
    //Destructuration de props
    
    const {titre,enseignement,image,nomProfesseur} = props
    return(
        <div >
         
        <div  className={styles.ClassCard} >
           <div className="bg-blue-400 rounded inline-block">
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