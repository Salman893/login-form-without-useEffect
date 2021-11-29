import './App.css';
import { Fragment } from 'react';
import MainHeader from './components/Header/MainHeader';
import Login from './components/Login/Login';
import { useState } from 'react';
import Home from './components/Home/Home';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    //localStorage.setItem();
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    setIsLoggedIn(false);
  }

  return (
    <Fragment>
      <MainHeader onLogout={logoutHandler}  isAuthenticated={isLoggedIn}/>
      {!isLoggedIn && <Login onLogin={loginHandler}/>}
      {isLoggedIn && <Home />}
    </Fragment>
  );
}

export default App;
