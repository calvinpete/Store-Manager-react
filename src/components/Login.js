import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import loginUser from '../actions/loginAction';

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email_address: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isSuccessful) {
      this.handleErrors(nextProps);
    } else {
      toast.success(nextProps.message);
      setTimeout(() => this.props.history.push('/'));
    }
  }

  handleErrors = (props) => {
    toast.error(props.error);
  }

  handleSubmit(event) {
    event.preventDefault();
    const payload = {
      email_address: event.target[0].value,
      password: event.target[1].value,
    };
    this.props.loginUser(payload);
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
                      <h2>Store Manager</h2>
                      <small>Sign in with</small>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group mb-3">
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
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary my-4">Sign in</button>
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
  isSuccessful: state.loginReducer.isSuccessful,
  error: state.loginReducer.error,
  message: state.loginReducer.message,
});

export default connect(mapStateToProps, { loginUser })(Login);
