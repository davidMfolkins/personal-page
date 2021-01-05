import './App.scss';
import Nav from './Nav';
import Home from './Home'
import About from './About';
import Projects from './Projects';
import Hire from './Hire'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/hire" component={Hire} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
