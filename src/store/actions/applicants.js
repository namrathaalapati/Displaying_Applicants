import axios from 'axios';

import * as actionTypes from './actionTypes';

export const setApplicants=(applicants)=>{
    return{
        type:actionTypes.SET_APPLICANTS,
        applicants:applicants
    }
}

export const failApplicants = (error)=>{
    return{
        type:actionTypes.FAIL_APPLICANTS,
        error:error
    }
}
export const getApplicants=()=>{
    return dispatch=>{
        axios.get("https://my-json-server.typicode.com/namrathaalapati/JSONData/applicants")
        .then(response=>{
            dispatch(setApplicants(response.data));
        })
        .catch(error=>{
            console.log(error);
            dispatch(failApplicants(error.response));
        })
    }
}