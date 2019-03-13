import { shallow } from 'enzyme';
import React from 'react';
import Login from '../../src/components/Login';

const props = {};
describe('Login', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
