/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';


export default class MenuHeader extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    localStorage.removeItem('token');
    window.location.reload('/');
  }

  render() {
    return (
      <Menu>
        <Menu.Item name="Products">
          <NavLink to="/" exact>Products</NavLink>
        </Menu.Item>

        <Menu.Item name="New Employee">
          <NavLink to="/employee" exact>New Employee</NavLink>
        </Menu.Item>

        <Menu.Item position="right" name="Sign Out" onClick={this.handleClick}>
        </Menu.Item>
      </Menu>
    );
  }
}
