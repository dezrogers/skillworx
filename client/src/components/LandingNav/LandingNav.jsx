import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from "../../utils/API"
import "./LandingNav.css"

export class LandingNav extends Component {
  state={
    email: "",
    password: "",
    redirectTo: null
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Enter email and password!!!");
    }  else {
      const { email, password } = this.state;

      API.login({ email, password }).then((res)=>{
        this.setState({ redirectTo: res.data });
      }).catch(err => {
        console.log(err);
      })
    }
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }

    return (
      
      <div>
        <nav className="navbar navbar-light">
          <span className="navbar-brand mb-0">
            <span className="cap-brand">S</span>
            <span className="small-cap-brand">kill</span>
            <span className="cap-brand">W</span>
            <span className="small-cap-brand">orx</span>
          </span>
          <div className="d-flex">
            <form className="login">
              <div className="form-group form-inline">
                <input type="text" className="form-control mr-3" id="usernameLogin" placeholder="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                <input type="password" className="form-control mr-3" id="userPasswordLogin" placeholder="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary" id="login-submit">login</button>
              </div>
            </form>
          </div>
          
        </nav>
      </div>


          
        ) 
      }
    }
    export default LandingNav;