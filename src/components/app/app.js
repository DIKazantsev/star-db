import React from "react";
import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry/error-boundry";
import SwapiService from '../../services/swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  SecretPage,
  LoginPage

} from '../pages';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { StarshipDetails } from "../sw-components";



export default class App extends React.Component {

  swapiService = new SwapiService();

  constructor() {
    super();
    this.state = {
      hasError: false,
      isLoggedIn: false
    }
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>

          <Router>
            <div className="container" >
              <Header />
              <RandomPlanet />
              <Switch>
                <Route path="/"
                  render={() => <h2>Welcome to StarDB</h2>}
                  exact
                />
                <Route path="/planets"
                  render={() => <h2>Planets</h2>}
                  exact
                />
                <Route path="/starships"
                  render={() => <h2>Starships</h2>}
                  exact
                />
                <Route path="/people/:id?" component={PeoplePage} />

                <Route path="/planets" component={PlanetsPage} />

                <Route path="/starships"
                  component={StarshipsPage}
                  exact
                />
                <Route path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />
                  }} />

                <Route path="/login"
                  render={() => {
                    return <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin} />
                  }}
                />

                <Route path="/secret"
                  render={() => {
                    return <SecretPage
                      isLoggedIn={isLoggedIn} />
                  }}
                />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
};

