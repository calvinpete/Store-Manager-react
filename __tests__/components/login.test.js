import { shallow } from 'enzyme';
import React from 'react';
import { Login } from '../../src/components/Login';

const props = {
  history: {
    push: jest.fn(),
  },
  isSuccessful: false,
  error: 'dd',
  message: 'dd',
  loginUser: jest.fn(),
};
describe('Login', () => {
  const wrapper = shallow(<Login {...props} />);
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call handleErrors', () => {
    const wrapper = shallow(<Login {...props} />);
    wrapper.instance().handleErrors(props);
    expect(wrapper.instance().props.error).toBe(props.error);
  });
  it('should call handleInput', () => {
    wrapper.instance().setState = jest.fn();
    const event = {
      target:
          {
            email_address: 'address',
            password: 'password',

          },
    };
    wrapper.instance().handleInput(event);
    expect(wrapper.instance().setState).toBeCalled();
  });
  it('should call handleSubmit', () => {
    const event = {
      preventDefault: jest.fn(),
      target: [
        {
          value: 'address',
        },
        {
          value: 'password',
        },
      ],
    };
    wrapper.instance().handleSubmit(event);
    expect(wrapper.instance().props.loginUser).toBeCalled();
  });
  it('should handle an error on failed login', () => {
    wrapper.setProps({
      isSuccessful: false,
      error: 'errors',
    });
    wrapper.instance().handleErrors(props);
    expect(wrapper.instance().props.error).toBeDefined();
  });
  it('should redirect after successful login', () => {
    wrapper.setProps({
      isSuccessful: true,
      message: 'success',
    });
    wrapper.instance().props.history.push('/Dashboard');
    expect(wrapper.instance().props.message).toBeDefined();
  });
});
