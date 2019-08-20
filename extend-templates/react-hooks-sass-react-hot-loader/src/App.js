import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './components/Home';
import './styles/app.scss';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/" title="Go to the homepage">Home</Link> - <Link to="/home" title="View message">Welcome message</Link>
            </nav>

            <Switch>
                <Route path="/home" component={Home} />
            </Switch>
        </Router>
    );
}

export default hot(App);