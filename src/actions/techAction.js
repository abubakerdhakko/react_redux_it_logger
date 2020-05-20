import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR, LOGS_ERROR } from './types';

// get tech 
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();
    console.log('data:', data)

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// CLEARCurren  
// export const clearCurrent = () => {
//   return {
//     type: CLEAR_CURRENT,
//   }
// }
// loading 
export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}