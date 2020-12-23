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
        
        <div className = {styles.pictureCard + " max-w-md m-50 overflow-ellipsis overflow-hidden"}>
           <div className= {couleur}>

            <img className ="transform scale-75 h-60 mx-auto  " src={image} alt=""/>
            <div className="font-bold text-xl mb-2"> 
            <h1 className= "text-center ">{titre}</h1>
           
            </div>
            <p className = "font-bold mb-2 text-center"  >Professeur : {nomProfesseur}</p>
            <p className= " m-10 text-center overflow-ellipsis h-60 ">{enseignement}</p>
            </div> 
            
            
        </div>


        
    )
    
}

export default ClassCard