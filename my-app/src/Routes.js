
import {Route, Switch} from "react-router-dom"

import ExpoCardPage from '../src/Components/Expo/expoCardPage'
import ClassCardContainer from '../src/Components/Cours/classCardContainer'
import ExpoCardPageDessin from "../src/Components/SelectedDiscipline/ExpoCardPageDessin"

const Routes = () => {
	return (
		<Switch>
            <Route path="/disciplines">

            </Route>
            
            <Route path="/dessin">

                {/* <ExpoCardPageDessin/>  */}
                <h1>Page expo dessin</h1>
                
            </Route>

            
            <Route path='/expos/:field'>
                <ExpoCardPage/>
            </Route>

            <Route path='/expos'>
                <ExpoCardPage/>
            </Route>

            <Route path='/sculpture'>
                <ExpoCardPage/>
            </Route>

            {/* <Route path='/login'>
                <Login />
            </Route> */}

            <Route path='/' exact>
                <ClassCardContainer/>
            </Route>


            {/* <Routes path="/Sculpture">

            </Routes> */}

            {/* <Routes path="/Dessin">

            </Routes> */}


            {/* <Route>
                <p>Page introuvable 404</p>
            </Route> */}
		</Switch>
	)
}

export default Routes