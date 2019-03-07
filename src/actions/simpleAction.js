import actionTypes from './actionTypes';

const simpleAction = () => (dispatch) => {
  dispatch({
    type: actionTypes.SIMPLE_ACTION,
    payload: 'result_of_simple_action',
  });
};

export default simpleAction;
