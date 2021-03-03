
import {JOBS_FOR_YOU} from '../actions/actionTypes';


const initalState = {
  allJobs: [],
};

const reducer = (state = initalState, action) => {
  switch(action.type) {
    case JOBS_FOR_YOU:
      return {...state, allJobs: [...state.allJobs]}; 
    default:
      return state;
    
  }
};

export default reducer;