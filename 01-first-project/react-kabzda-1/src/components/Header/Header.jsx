import { NavLink } from "react-router-dom";
import s from'./Header.module.css';

const Header = (props) => {
   return (
      <header className={s.header}>
         <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"></img>

         <div className={s.loginBlock}>
            { props.isAuth 
               ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
               : <NavLink to={'/login'}>Log In</NavLink> }
         </div>
      </header>
   );
};

export default Header;
