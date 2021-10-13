import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Main from './Main';
import ListRepo from './ListRepo';
const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact>
                       <Main/>
                    </Route>
                    <Route path="/List/:name" component={ListRepo}>
                       <ListRepo/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routes