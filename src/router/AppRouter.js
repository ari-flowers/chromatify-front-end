import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import RedirectPage from '../components/RedirectPage';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import AlbumDetails from '../components/AlbumDetails';
import NewTrack from '../components/NewTrack';
import EditTrack from '../components/EditTrack'
import CreatedTracksList from '../components/CreatedTracksList'


class AppRouter extends React.Component {
  state = {
    expiryTime: '0'
  };

  componentDidMount() {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    } catch (error) {
      expiryTime = '0';
    }
    this.setState({ expiryTime });
  }

  setExpiryTime = (expiryTime) => {
    this.setState({ expiryTime });
  };

  isValidSession = () => {
    const currentTime = new Date().getTime();
    const expiryTime = this.state.expiryTime;
    const isSessionValid = currentTime < expiryTime;

    return isSessionValid;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route
              path="/"
              exact={true}
              render={(props) => (
                <Home isValidSession={this.isValidSession} {...props} />
              )}
            />
            <Route
              path="/redirect"
              render={(props) => (
                <RedirectPage
                  isValidSession={this.isValidSession}
                  setExpiryTime={this.setExpiryTime}
                  {...props}
                />
              )}
            />
            <Route
              path="/dashboard"
              render={(props) => (
                <Dashboard isValidSession={this.isValidSession} {...props} />
              )}
            />
            <Route
              path="/chromatify/albumdetails/:id"
              render={(props) => (
                <AlbumDetails isValidSession={this.isValidSession} {...props} />
              )}
            />
            <Route
              path="/chromatify/created"
              render={(props) => (
                <CreatedTracksList isValidSession={this.isValidSession} {...props} />
              )}
            />
            <Route
              path="/chromatify/newtrack"
              render={(props) => (
                <NewTrack isValidSession={this.isValidSession} {...props} />
              )}
            />
            <Route
              path="/chromatify/:id/edittrack"
              render={(props) => (
                <EditTrack isValidSession={this.isValidSession} {...props} />
              )}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
