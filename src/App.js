import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Programming } from './Programming';
import { Layout } from './components/layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Biomedical } from './Biomedical';
import { Other } from './Other';
import Social from './components/Social'

function App() {
  return (
    <React.Fragment>
        <Router basename="/">
          <NavigationBar />
          <Jumbotron/>
          <Social/>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/programming" component={Programming} />
              <Route path="/biomedical" component={Biomedical} />
              <Route path="/other" component={Other} />
              <Route component={NoMatch} />

            </Switch>
          </Layout>
        </Router>
    </React.Fragment>
  );
}

export default App;
