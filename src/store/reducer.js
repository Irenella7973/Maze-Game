import { LOAD_CARDS, GENERATE_STEP, GET_ANSWER } from './actionTypes'

const initialState = {
  cards: [ 0,0,0,0,0,0,0,0,0 ],
  step : [],
  answer: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS: {
      return { ...state, cards: action.payload }
    }
    case GENERATE_STEP: {
      return { ...state, step: action.payload }
    }
    case GET_ANSWER: {
      return { ...state, answer: action.payload }
    }
    
    default: return state;
  }
}
