import styles from "./background.module.css"


const Footer =(props)=>{
    const {bgcouleur,text,image, adresse, adresse2}= props
    return(
        <div className= {bgcouleur}>
            <img className="p-8" src={image} alt=""/>
        <h1>{text}</h1>
        <p>{adresse}</p>
        <p>{adresse2}</p>

         </div>

       
    )

}

export default Footer