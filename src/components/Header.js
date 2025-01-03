import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
const Header = () => {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  const authDispatch = useDispatch();

  function handleLogOut() {
    authDispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {authenticated && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
