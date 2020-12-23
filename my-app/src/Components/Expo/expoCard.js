import styles from "./expoCard.module.css"

const ExpoCard= (props)=>{
    const {discipline,auteur,description,image,couleur} = props
    return(
        <div >
        <div  className={styles.expoCard} >
           <div className={couleur}>
           <h1 className= "text-center font-bold text-lg ">{discipline}</h1>
            <img className= "p-2 object-none object-top w-7" src={image} alt=""/>
            <p>{auteur}</p>
            <p>{description}</p>
            </div> 
        </div>
        </div>
    )
}

// const AvaArtiste = (props) => {
// 	return (
// 		<img src={props.src} alt={`Profil of ${props.alt}`} />
// 	)
// }
export default ExpoCard
