import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import RedirectPage from '../components/RedirectPage';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import AlbumDetails from '../components/AlbumDetails';
import TrackDetails from '../components/TrackDetails';
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
              render={(renderProps) => (
                <Home isValidSession={this.isValidSession} {...renderProps} />
              )}
            />
            <Route
              path="/redirect"
              render={(renderProps) => (
                <RedirectPage
                  isValidSession={this.isValidSession}
                  setExpiryTime={this.setExpiryTime}
                  {...renderProps}
                />
              )}
            />
            <Route
              path="/dashboard"
              render={(renderProps) => (
                <Dashboard isValidSession={this.isValidSession} {...renderProps} />
              )}
            />
            <Route
              path="/chromatify/albumdetails/:id"
              render={(renderProps) => (
                <AlbumDetails isValidSession={this.isValidSession} {...renderProps} />
              )}
            />
            <Route
              path="/chromatify/trackdetails/:id"
              render={(renderProps) => (
                <TrackDetails isValidSession={this.isValidSession} {...renderProps} />
              )}
            />
            <Route
              path="/chromatify/created"
              render={(renderProps) => (
                <CreatedTracksList isValidSession={this.isValidSession} {...renderProps} />
              )}
            />
            <Route
              path="/chromatify/newtrack"
              render={(renderProps) => (
                <NewTrack isValidSession={this.isValidSession} {...renderProps} />
              )}
            />
            <Route
              path="/chromatify/:id/edittrack"
              render={(renderProps) => (
                <EditTrack isValidSession={this.isValidSession} {...renderProps} />
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
