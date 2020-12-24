
import {Route} from "react-router-dom"

import ExpoCardPage from '../src/Components/Expo/expoCardPage'
import ClassCardContainer from '../src/Components/Cours/classCardContainer'

const Routes = () => {
	return (
		<>
            <Route path='/expos'>
                <ExpoCardPage/>
            </Route>
            {/* <Route path='/login'>
                <Login />
            </Route> */}
            <Route path='/' exact>
                <ClassCardContainer/>
            </Route>
            {/* <Route>
                <p>Page introuvable 404</p>
            </Route> */}
		</>
	)
}

export default Routes