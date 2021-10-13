import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Search from "./components/Search"
import ListRepo from './components/ListRepo';
const App = () => {
  return (
           
            <Router>
                <Switch>
                    <Route path="/" exact>
                       <Search/>
                    </Route>
                    <Route path="/list/:name" component={ListRepo}>
                       <ListRepo/>
                    </Route>
                </Switch>
            </Router>
    
  )
}

export default App

