import { ADD_BASKET, REMOVE_BASKET, SET_LOADING_BASKET } from '../consts/basket';

const initialState = {
  items: [],
  loading: false
}
export default function basket(state = initialState, action) {
  switch (action.type) {
    case ADD_BASKET: {
      const {items} = state;
      const index = items.findIndex((item) => item.id === action.payload.id)
      if(index !== -1) {
        const item = items[index];
        items[index] = {
          ...item,
          count: item.count + 1
        }
        return {
          ...state,
          items: [...items],
          loading: false
        }
      }
      return {
        ...state,
        items: [
          ...items,
          {
            ...action.payload,
            count: 1
          }
        ],
        loading: false
      };
    }
    case REMOVE_BASKET: {
      const items = state.items.filter(({ id }) => id !== action.payload.id);
      return {
        ...state,
        items,
        loading: false
      };
    }
    case SET_LOADING_BASKET: {
      return {
        ...state,
        loading: true
      }
    }
    default:
      return state;
  }
}
