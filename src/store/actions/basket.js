import {ADD_BASKET, REMOVE_BASKET, SET_LOADING_BASKET} from '../consts/basket';
import Swal from 'sweetalert2'

export const addBasket= (item) => {
  return (dispatch) => {
    dispatch({type: SET_LOADING_BASKET,})
    setTimeout(() =>{
      dispatch({
        type: ADD_BASKET,
        payload: item
      })
      Swal.fire({
        icon: 'success',
        title: 'Sepete Eklendi!',
        showConfirmButton: false,
        timer: 1500
      })
    }, 500)
    
  }
} 
export const removeBasket= (item) => {
  return (dispatch) => {
    dispatch({type: SET_LOADING_BASKET,})
    setTimeout(() =>{
      dispatch({
        type: REMOVE_BASKET,
        payload: item
      })
       
    }, 500)
    
  }
}