import './App.css';
import Profile from './profile.jsx';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Menunav from './nav.jsx';
import Carts from './cart.jsx';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/profile' exact component={Profile} />
                    <Route path='/cart' exact component={Carts} />
                    <Route path='/' exact component={Menunav} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
