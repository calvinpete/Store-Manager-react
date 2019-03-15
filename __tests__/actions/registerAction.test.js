import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import registerUser from '../../src/actions/registerAction';
import actionTypes from '../../src/actions/actionTypes';


const middleware = [thunk];
const mockStore = configureStore(middleware);

const { BASE_URL } = process.env;
const token = localStorage.getItem('token');
const validData = {
  name: 'Black Box', email_address: 'BBx@gmail.com', password: 'Blax', account_type: 'store_attendant',
};
const invalidData = {
  name: '', email_address: '', password: '', account_type: '',
};

describe('User registering', () => {
  beforeEach(() => {
    fetchMock.restore();
  });
  it('tests successful log in', () => {
    fetchMock.postOnce(
      `${BASE_URL}/auth/signup`,
      {
        body: {
          message: 'Black Box has been successfully registered',
        },
        headers: {
          'content-type': 'application/json',
          'x-access-token': `${token}`,
        },
        status: 201,
      },
    );
    const expectedAction = [
      {
        type: actionTypes.REGISTER_SUCCESSFUL,
        payload: 'Black Box has been successfully registered',
      },
    ];
    const store = mockStore();
    return store.dispatch(registerUser(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('tests failed registering', () => {
    fetchMock.postOnce(
      `${BASE_URL}/auth/signup`,
      {
        body: {
          message: 'hdhd',
        },
        headers: {
          'content-type': 'application/json',
          'x-access-token': `${token}`,
        },
        status: 400,
      },
    );
    const expectedAction = [
      {
        type: actionTypes.REGISTER_FALIURE,
        payload: 'hdhd',
      },
    ];
    const store = mockStore();
    return store.dispatch(registerUser(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
