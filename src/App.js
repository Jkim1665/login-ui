import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">

          <div className="App__Aside"></div>

          <div className="App__Form">

            <div className="PageSwitcher">

              <a href="#" className="PageSwitcher__Item">Sign In</a>

              <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
            </div>

            <div className="FormTitle">
              <a href="#" className="FormTitle__Link">Sign In</a> or <a href="#"
                className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
            </div>

          <Route exact path="/">
              <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>

                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Full Name</label>
                    <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" />
                  </div>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Email</label>
                    <input type="email" id="email" className="FormField__Input" placeholder="email" name="email" />
                  </div>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" />
                  </div>
                  <div className="FormField">
                    <label className="FormField__CheckboxLabel">
                      <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> I agree all
                      statements in < a href="" className="FormField__TermsLink"> terms of service </a>
                  </label>
                  </div>

                  <div className="FormField">
                    <button className="FormField__Button mr-20">Sign Up</button> <a href="#"
                    className="FormField__Link"> I'm already member</a>
                  </div>

                </form>
              </div>
          </Route>
          <Route path="/sign-in">
          <h1>Sign in</h1> 
          </Route>
          </div>
        </div>
      </Router>
    )
  }
}


export default App;
