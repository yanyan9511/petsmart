import './App.css';
import React from 'react';
import Login from './Loginpage/LoginPage'
import Signup from './Loginpage/SignupPage'
import HomePage from './Homepage/HomePage'
import FormPage from './Formpage/FormPage'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GiRhinocerosHorn } from 'react-icons/gi';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: "",
      }

      this.logInUser = this.logInUser.bind(this)
      this.logOutUser = this.logOutUser.bind(this)
    }
    
    logInUser(userName){
      this.setState({user: userName})
    }

    logOutUser(){
      this.setState({user: ""})
    }

    render() {
      return (
        <BrowserRouter>
        <Switch>
          <Route exact path = "/" component={() => (<HomePage userLogIn = {this.state.user} userLogOut= {this.logOutUser}/>)} />
          <Route path = "/login" component={() => (<Login userLogIn = {this.logInUser}/>)} />
          <Route path = "/signUp" component = {Signup} />
          <Route path = "/formPage" component = {FormPage} />
        </Switch>
      </BrowserRouter>
      )
    }
}

export default App;


//<Header />
//<CoreValues />
//<CallToAction />
//<Carousel />
//<Memories />
//<Blog />
//<ContactUs />

//<Login />
//<Signup />