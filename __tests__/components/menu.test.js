import { shallow } from 'enzyme';
import React from 'react';
import MenuHeader from '../../src/components/Menu';


describe('Menu', () => {
  const { reload } = window.location;
  const wrapper = shallow(<MenuHeader />);
  beforeAll(() => {
    Object.defineProperty(window.location, 'reload', {
      configurable: true,
    });
    window.location.reload = jest.fn();
  });

  afterAll(() => {
    window.location.reload = reload;
  });
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('mocks method', () => {
    expect(jest.isMockFunction(window.location.reload)).toBe(true);
  });

  it('calls method', () => {
    localStorage.setItem('token', 'djdd');
    window.location.reload();
    wrapper.instance().handleClick();
    expect(localStorage.getItem('token')).toEqual(null);
    expect(window.location.reload).toHaveBeenCalled();
  });
});
