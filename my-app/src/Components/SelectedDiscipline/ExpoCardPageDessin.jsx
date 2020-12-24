//import { useState } from "react"
import expoUsers from "../../expoData"
import ExpoCard from "../Expo/expoCard"


const ExpoCardPageDessin=()=>{
    
    
	<section className= " h-64 grid grid-cols-4 grid-flow-row gap-5 m-3">
                {expoUsers.map(user => (
                    <ExpoCard
                        discipline={user.class}
                        image={user.img}
                        auteur={user.name}
                        email={user.email}
                        description={user.about}
                        couleur={user.color}
                        
                    />
                    
                ))}
            </section>


}

export default ExpoCardPageDessin
                    