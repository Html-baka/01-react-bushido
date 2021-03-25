import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import  { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";

let App = () => {
  
  return (
      <div className="app-wrapper"> 
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <DialogsContainer  />} />

          <Route path="/profile/:userId?" render={ () => <ProfileContainer />}/>

          <Route path="/news" render={ () => <News />} />
          <Route path="/music" render={ () => <Music />} />
          <Route path="/users" render={ () => <UsersContainer />} />
          <Route path="/login" render={ () => <LoginPage/>} />

          <Route path="/settings" render={ () => <Settings />} />
        </div>
      </div>
  );
};

export default App;
