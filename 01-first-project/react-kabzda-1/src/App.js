import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import  { Redirect, Route, Switch, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import { compose } from "redux";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import  { Provider } from "react-redux";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component{
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some error occured")
    console.error(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  };
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
 
  render() {
    if (!this.props.initialized){
      return <Preloader />
    }
    return (
      <div className="app-wrapper"> 
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
        <Switch>
           <Route exact path="/" render={ () => <Redirect from="/" to="/profile"/> }/>
            <Route path="/dialogs" render={ () =>{ 
              return  <Suspense fallback={<Preloader />}>
                <DialogsContainer  />
              </Suspense>}} />
            <Route path="/profile/:userId?" render={ () => {
              return  <Suspense fallback={<Preloader />}>
                <ProfileContainer />
              </Suspense>}} /> 
            <Route path="/news" render={ () => <News />} />
            <Route path="/music" render={ () => <Music />} />
            <Route path="/users" render={ () => <UsersContainer />} />
            <Route path="/login" render={ () => <LoginPage/>} />
            <Route path="/settings" render={ () => <Settings />} />
            <Route path="*" render={ () => <div>404 NOT FOUND</div> } />
          </Switch>
        </div>
      </div>
  );
};
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized

})

let AppContainer = compose( 
  withRouter,
  connect (mapStateToProps, { initializeApp }))(App);

let MainApp = (props) => {
  return  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
    <AppContainer /> 
  </Provider>
</BrowserRouter>
}
export default MainApp;