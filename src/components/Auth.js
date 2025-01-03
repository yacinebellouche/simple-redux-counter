import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
const Auth = () => {
  const authDispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    if (data.password !== "" && data.email !== "") {
      authDispatch(authActions.login());
    }
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
