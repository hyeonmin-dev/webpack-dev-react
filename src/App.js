import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About } from './pages';

class App extends Component {
    render() {
        return (
			<Router>
            <div>
				<Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About}/>
				</Switch>
            </div>
			</Router>
        );
    }
}

export default App;