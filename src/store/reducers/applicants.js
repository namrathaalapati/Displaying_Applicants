import * as actionTypes from '../actions/actionTypes';

const initialState = {
 applicants:null,
 error:null
};

const reducer = (state = initialState, action) => {
  switch(action.type)
  {
    case actionTypes.SET_APPLICANTS:
      return{
        ...state,
        applicants:action.applicants
      }
    case actionTypes.FAIL_APPLICANTS:
      return{
        ...state,
        error:action.error
      }
    default:
      return state;
  }
  
};

export default reducer;
