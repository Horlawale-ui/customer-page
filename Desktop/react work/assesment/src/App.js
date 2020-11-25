import './App.css';
import Profile from './profile.jsx';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Menunav from './nav.jsx';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/profile' exact component={Profile} />
                    <Route path='/' exact component={Menunav} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
