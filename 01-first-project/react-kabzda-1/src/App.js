import "./App.css";
import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import  { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

let App = () => {
  
  return (
      <div className="app-wrapper"> 
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <DialogsContainer  />} />

          <Route path="/profile/:userId?" render={ () => <ProfileContainer />}/>

          <Route path="/news" render={ () => <News />} />
          <Route path="/music" render={ () => <Music />} />
          <Route path="/users" render={ () => <UsersContainer />} />

          <Route path="/settings" render={ () => <Settings />} />
        </div>
      </div>
  );
};

export default App;
