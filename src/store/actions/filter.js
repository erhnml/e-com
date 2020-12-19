import {ADD_FILTER, REMOVE_FILTER, SET_LOADING_FILTER} from '../consts/filter';

export const addFilter = (filter) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING_FILTER })
    setTimeout(() =>{
      dispatch({
        type: ADD_FILTER,
        payload: filter
      })
    }, 500)
    
  }
} 
export const removeFilter = (filter) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING_FILTER })
    setTimeout(() =>{
      dispatch({
        type: REMOVE_FILTER,
        payload: filter
      })
    }, 500)
    
  }
} 
