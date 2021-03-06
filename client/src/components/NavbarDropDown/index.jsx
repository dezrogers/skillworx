import React, { Component } from 'react';
import LogoutButton from '../Logout/logout';
import API from '../../utils/API';
import './style.css'

class DropDown extends Component {
    state={
        firstName: "",
        lastName: "",
        id: ""
    }
    componentDidMount(){
        this.getUser();
    }
    
    // Get user information from db applied to page
      getUser = () => {
        API.getUsers()
          .then(response => {
            this.setState({
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              id: response.data._id
            });
          })
          .catch(err => console.log(err));
      };   
      render(){
          return(
              <div>

<div className="dropdown">
  <div className="dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  {this.state.firstName} {this.state.lastName}
  </div>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="/profile">Profile</a>
    <a className="dropdown-item" href="/search">Search</a>
    <a className="dropdown-item" href="/postForm">Post Job</a>
    <a className="dropdown-item" href="/settings">Settings</a>
    <div className="dropdown-item logoutSection" href="#"><LogoutButton /></div>
  </div>

</div>



            
              </div>
          )
      }
}
export default DropDown