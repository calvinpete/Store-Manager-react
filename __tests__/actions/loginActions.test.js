import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import loginUser from '../../src/actions/loginAction';
import actionTypes from '../../src/actions/actionTypes';


const middleware = [thunk];
const mockStore = configureStore(middleware);

const { BASE_URL } = process.env;
const validData = {
  email_address: 'hdhd',
  password: 'jdjdd',
};
const invalidData = {
  email_address: '',
  password: '',
};

describe('User logging in', () => {
  beforeEach(() => {
    fetchMock.restore();
    localStorage.clear();
  });
  it('tests successful log in', () => {
    fetchMock.postOnce(
      `${BASE_URL}/auth/login`,
      {
        body: {
          message: 'You have successfully logged in',
          token: 'jdjdd',
        },
        headers: {
          'content-type': 'application/json',
        },
      },
    );
    const expectedAction = [
      {
        type: actionTypes.LOGIN_SUCCESSFUL,
        payload: 'You have successfully logged in',
      },
    ];
    const store = mockStore();
    return store.dispatch(loginUser(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('tests failed log in', () => {
    fetchMock.postOnce(
      `${BASE_URL}/auth/login`,
      {
        body: {
          message: 'hdhd',
        },
        headers: {
          'content-type': 'application/json',
        },
      },
    );
    const expectedAction = [
      {
        type: actionTypes.LOGIN_FALIURE,
        payload: 'hdhd',
      },
    ];
    const store = mockStore();
    return store.dispatch(loginUser(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
