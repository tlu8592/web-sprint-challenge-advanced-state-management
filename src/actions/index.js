import axios from 'axios';

export const FETCH_SMURFS_LOADING = 'FETCH_SMURFS_LOADING';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_LOADING });
        axios 
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log("response", res);
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log("error", err);
                dispatch({ type: FETCH_SMURFS_FAIL, payload: err.error })
            })
    }
}

export const addSmurf = (newSmurfId) => {
    return { type: ADD_SMURF, payload: newSmurfId };
}

export const setError = (error) => {
    return { type: SET_ERROR_MESSAGE, payload: error };
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.