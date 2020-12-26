import {GET_DATA, GET_DATA_SUCCESS} from './types';

export const ApiCall = () => {
  return (dispatch) => {
    dispatch({type: GET_DATA});
    fetch('/api/destinations')
      .then((res) => res.json())
      .then((json) => {
        console.log('getting destinations ::', json);
        dispatch({type: GET_DATA_SUCCESS, payload: json});
      });
  };
};
