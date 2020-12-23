import styles from "./background.module.css"


const Footer =(props)=>{
    const {bgcouleur,text,image, adresse, adresse2}= props
    return(
        <div className= {bgcouleur}>
            <img className="m-8"  src={image} alt=""/>
            <div className="font-bold text-xl mb-2 underline" ><h1>{text}</h1></div>
        
            <p className= "ml-8">{adresse}</p>
             <p>{adresse2}</p>

         </div>

       
    )

}

export default Footer