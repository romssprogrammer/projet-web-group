import styles from "./background.module.css"


const BackgroundColor=(props)=>{
    const {bgcouleur,text,image, adresse}= props
    return(
        <div className= {bgcouleur}>
            <img className="p-8" src={image} alt=""/>
        <h1>{text}</h1>
        <p>{adresse}</p>
         </div>

       
    )

}

export default BackgroundColor