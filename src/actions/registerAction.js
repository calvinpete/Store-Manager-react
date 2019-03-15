import actionTypes from './actionTypes';

const { BASE_URL } = process.env;

const registerUser = payload => (dispatch) => {
  let statusCode;
  return fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json',
      'x-access-token': JSON.parse(localStorage.getItem('token')),
    },
  })
    .then((res) => {
      const { status } = res;
      statusCode = status;
      return res.json();
    })
    .then((data) => {
      if (statusCode === 201) {
        dispatch({
          type: actionTypes.REGISTER_SUCCESSFUL,
          payload: data.message,
        });
      } else {
        dispatch({
          type: actionTypes.REGISTER_FALIURE,
          payload: data.message,
        });
      }
    });
};

export default registerUser;
