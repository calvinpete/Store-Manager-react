import { shallow } from 'enzyme';
import React from 'react';
import { Dashboard } from '../../src/components/Dashboard';

const props = {
  products: [
    {
      created_on: 'Fri, 02 Nov 2018 05:08:57 GMT',
      details: 'HP ProBook 4540s i3',
      last_modified: 'Fri, 02 Nov 2018 09:45:59 GMT',
      price: 1202000,
      product_id: 3,
      product_name: 'Laptops',
      quantity: 20,
    },
  ],
  fetchAllProducts: jest.fn(),
};

describe('Dashboard', () => {
  const wrapper = shallow(<Dashboard {...props} />);
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
