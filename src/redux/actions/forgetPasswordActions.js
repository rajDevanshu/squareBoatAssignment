import axios from 'axios';
import { FORGOT_PASSWORD } from './actionTypes';

export const ForgotPassword = (body) => (dispatch) => {
    return new Promise((resolve,reject)=>{
    axios
    .get(`https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=${body}`
    )
    .then(function(response)  {
      dispatch({
          type: FORGOT_PASSWORD,
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