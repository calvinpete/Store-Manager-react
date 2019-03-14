import actionTypes from './actionTypes';

const { BASE_URL } = process.env;

const loginUser = payload => dispatch => fetch(`${BASE_URL}/auth/login`, {
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify(payload),
  headers: {
    'content-type': 'application/json',
  },
})
  .then(resp => resp.json())
  .then((data) => {
    if (data.message === 'You have successfully logged in') {
      localStorage.setItem('token', JSON.stringify(data.token));
      dispatch({
        type: actionTypes.LOGIN_SUCCESSFUL,
        payload: data.message,
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FALIURE,
        payload: data.message,
      });
    }
  });

export default loginUser;
