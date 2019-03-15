import { shallow } from 'enzyme';
import React from 'react';
import { Register } from '../../src/components/Register';

const props = {
  history: {
    push: jest.fn(),
  },
  isSuccessful: false,
  error: 'dd',
  message: 'dd',
  registerUser: jest.fn(),
};
describe('Login', () => {
  const wrapper = shallow(<Register {...props} />);
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call handleErrors', () => {
    const wrapper = shallow(<Register {...props} />);
    wrapper.instance().handleErrors(props);
    expect(wrapper.instance().props.error).toBe(props.error);
  });
  it('should call handleInput', () => {
    wrapper.instance().setState = jest.fn();
    const event = {
      target:
          {
            name: 'dded',
            email_address: 'asdsd',
            password: 'ass',
            account_type: 'sdsda',

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
          value: 'de',
        },
        {
          value: 'pa',
        },
        {
          value: 'as',
        },
        {
          value: 'ord',
        },
      ],
    };
    wrapper.instance().handleSubmit(event);
    expect(wrapper.instance().props.registerUser).toBeCalled();
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
    wrapper.instance().props.history.push('/');
    expect(wrapper.instance().props.message).toBeDefined();
  });
});
