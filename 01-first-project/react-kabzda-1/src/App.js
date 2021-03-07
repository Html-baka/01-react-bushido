import "./App.css";
import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import  { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

let App = () => {
  
  return (
      <div className="app-wrapper"> 
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <DialogsContainer  />} />
          <Route path="/profile" render={ () => <Profile />}/>
          <Route path="/news" render={ () => <News />} />
          <Route path="/music" render={ () => <Music />} />
          <Route path="/users" render={ () => <div>users</div>}/>
          
          <Route path="/settings" render={ () => <Settings />} />
        </div>
      </div>
  );
};

export default App;
