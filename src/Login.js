import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory(); // allows to redirect the url to home page after sigining in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    // it takes in an event(e) because it is in a form
    e.preventDefault(); // to prevent the page from refreshing.

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        //it successfully created a new user
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch(error => alert(error.message));
  };
  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        //it successfully created a new user
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqYnZjbGWmqGI2nb8Qb0WoRG01htJbwTmxw&usqp=CAU"
        />
      </Link>
      <div className="login__container ">
        <h1>SIGN-IN</h1>
        <form>
          <h5>Email:</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password:</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button onClick={signIn} className="login__signInBotton">
            SIGN-IN
          </button>
        </form>

        <p>
          By signing in you hereby agree to all the nonsense charges we are
          going to be charinging. Proceed with caution just get ready to spend
        </p>
        <button onClick={register} className="login__createBotton">
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
