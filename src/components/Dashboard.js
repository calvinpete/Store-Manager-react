import React from 'react';
import { connect } from 'react-redux';
import loginUser from '../actions/loginAction';

export class Dashboard extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.loginUser();
  }

  render() {
    return (
      <div>
        <h1>Store Manager</h1>
        <button type="button" onClick={this.handleClick}>Begin!!!</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, { loginUser })(Dashboard);
