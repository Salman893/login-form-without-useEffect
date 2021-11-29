import { useState } from "react";
import Card from "../../UI/Card";
import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

 const emailChangeHandler = event => {
    setEnteredEmail(event.target.value);

    setFormIsValid(event.target.value.includes('@') && enteredPassword.trim().length > 5);
 }

 const passwordChangeHandler = event => {
    setEnteredPassword(event.target.value);

    setFormIsValid(enteredEmail.includes('@') && event.target.value.trim().length > 5);
 }

 const emailBlurHandler = event => {
    setEmailIsValid(enteredEmail.includes('@'));
 }

 const passwordBlurHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 5);
 }

  const submitHandler = event => {
      event.preventDefault();
      props.onLogin();
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={`${emailIsValid === false ? classes.invalid : ''}`} >
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        </div>
        <div className={`${passwordIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={passwordChangeHandler} onBlur={passwordBlurHandler} />
        </div>
        <div>
          <button disabled={!formIsValid} >Login</button>
        </div>
      </form>
      </Card>
  );
};

export default Login;
