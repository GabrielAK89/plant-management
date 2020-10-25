import React, { Component } from "react";
import fire from "./config/Fire";
import Login from "./features/login/Login";
import Home from "./features/login/Home";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

class App extends Component {
  state = {
      user: {},
   };

  // useEffect(() => {
  //   const fbUnsubscribe = fire.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //     if (user) {
  //       this.setState({ user });
  //       localStorage.setItem("user", user.uid);
  //     } else {
  //       this.setState({ user: null });
  //       localStorage.removeItem("user");
  //     }
  //   });
  //   return () => {
  //     fbUnsubscribe();
  //   }
  // }, []);
  
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    this.fbUnsubscribe = fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  componentWillUnmount() {
    this.fbUnsubscribe();
  }

  render() {
    return <div className="App">{this.state.user ? <Home /> : <Login />}</div>;
  }
}

export default App;
