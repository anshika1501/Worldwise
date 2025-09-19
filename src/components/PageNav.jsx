import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className="{styles.nav}">
        <ul>
             <NavLink to="/"></NavLink>
              <NavLink to="/PageNotFound">Pagenotfpond</NavLink>
           <br></br>
              <NavLink to="/pricing">price</NavLink>
              <br></br>
              <NavLink to="/product">product</NavLink>
            
        </ul>
    </nav>
  )
}
export default PageNav;