import { SET_LOADING, LOGS_ERROR, SEARCH_LOGS, GET_LOGS, ADD_LOG, DELETE_LOG, UPDATE_LOG, CLEAR_CURRENT, SET_CURRENT, GET_TECHS } from './types';
import Logs from '../Components/Logs/Logs';
// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();
    console.log('data:', data)

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// add log to server
export const addLog = (log) => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      }

    });
    const data = await res.json();
    console.log('data:', data)

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// delete log from server
export const deleteLog = (id) => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs/${id}`, {
      method: `DELETE`
    });
    const data = await res.json();
    console.log('data:', data)
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Update log on server
export const updateLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// setCurrent log 
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}

// CLEARCurren loading log 
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  }
}
export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

// serach logs
export const searchLogs = (text) => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    console.log('data:', data)

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};




// get technicians

// export const getTechs = () => async dispatch => {
//   try {
//     setLoading();

//     const res = await fetch('/techs');
//     const data = await res.json();
//     console.log('techs_data:', data)

//     dispatch({
//       type: GET_TECHS,
//       payload: data
//     });
//   } catch (err) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: err.response.statusText
//     });
//   }
// };