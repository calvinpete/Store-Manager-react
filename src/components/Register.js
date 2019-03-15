import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import registerUser from '../actions/registerAction';

export class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email_address: '',
      password: '',
      account_type: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isSuccessful) {
      this.handleErrors(nextProps);
    } else {
      toast.success(nextProps.message);
      setTimeout(() => this.props.history.push('/'), 5000);
    }
  }

  handleErrors = (props) => {
    toast.error(props.error);
  }

  handleSubmit(event) {
    event.preventDefault();
    const payload = {
      name: event.target[0].value,
      email_address: event.target[1].value,
      password: event.target[2].value,
      account_type: event.target[3].value,

    };
    this.props.registerUser(payload);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <section className="section section-shaped section-lg">
          <div className="container pt-lg-md">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card bg-secondary shadow border-0">
                  <div className="card-body px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <h2>New Employee</h2>
                      <small>Register the employee with</small>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <input
                            className="form-control"
                            placeholder="Name"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInput}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group input-group-alternative">
                          <input
                            className="form-control"
                            placeholder="Email"
                            type="email"
                            name="email_address"
                            value={this.state.email_address}
                            onChange={this.handleInput}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group input-group-alternative">
                          <input
                            className="form-control"
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInput}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <small>Should the employee have Admin rights?</small>
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            type="radio"
                            name="account_type"
                            id="customRadio1"
                            value="admin"
                            checked={this.state.account_type === 'admin'}
                            onChange={this.handleInput}
                          />
                          <label className="custom-control-label" htmlFor="customRadio1">Yes</label>
                        </div>
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            type="radio"
                            name="account_type"
                            id="customRadio2"
                            value="store_attendant"
                            checked={this.state.account_type === 'store_attendant'}
                            onChange={this.handleInput}
                          />
                          <label className="custom-control-label" htmlFor="customRadio2">No</label>
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary my-4">Register</button>
                      </div>
                    </form>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSuccessful: state.registerReducer.isSuccessful,
  error: state.registerReducer.error,
  message: state.registerReducer.message,
});

export default connect(mapStateToProps, { registerUser })(Register);
