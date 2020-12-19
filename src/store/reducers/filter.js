import { ADD_FILTER, REMOVE_FILTER, SET_LOADING_FILTER } from '../consts/filter';

const initialState = {
  filters: {},
  loading: false
}
export default function filter(state = initialState, action){
  switch (action.type) {
    case ADD_FILTER: {
      const filter = action.payload;
      if(state.filters[filter.type]) {
        if(filter.type === 'price') {
          return {
            ...state,
            filters: {
              ...state.filters,
              [filter.type]: [
                filter.value
              ]
            },
            loading: false
            }
        }
        return {
          ...state,
          filters: {
            ...state.filters,
            [filter.type]: [
              ...state.filters[filter.type],
              filter.value
            ]
          },
          loading: false
        }
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          [filter.type]: [filter.value]
        },
        loading: false
      }
    }
    case REMOVE_FILTER: {
      const filter = action.payload;
      if(state.filters[filter.type]) {
        const filters = state.filters[filter.type].filter((value) => value !== filter.value)
        return {
          ...state,
          filters: {
            ...state.filters,
            [filter.type]: filters
          },
          loading: false
        }
      }
      return state
    }
    case SET_LOADING_FILTER: {
      return {
        ...state,
        loading: true
      }
    }
    default:
      return state;
  }
}
