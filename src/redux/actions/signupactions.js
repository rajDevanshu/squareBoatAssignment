import axios from 'axios';
import { SIGN_UP } from './actionTypes';

export const SignupData = (body) => (dispatch) => {
    return new Promise((resolve,reject)=>{
    axios
    .post('https://jobs-api.squareboat.info/api/v1/auth/register',
    body 
    )
    .then(function(response)  {
      dispatch({
          type: SIGN_UP,
          payloads: response.data 
  });
        resolve(response.data)
        console.log(JSON.stringify(response.data));
    })
    .catch(function(error) { 
        console.log(error.response);
        reject(error.response);
    });
  })
}