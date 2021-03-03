import axios from 'axios';
import { LOG_IN, ACCESS_TOKEN } from './actionTypes';

export const LogInData = (body) => (dispatch) => {
    return new Promise((resolve,reject)=>{
    axios
    .post('https://jobs-api.squareboat.info/api/v1//auth/login',
    body 
    )
    .then(function(response)  {
      dispatch({
          type: LOG_IN,
          payloads: response.data 
  });
        resolve(response.data)
        localStorage.setItem("loginDetails", JSON.stringify(response.data.token));
    })
    .catch(function(error) { 
        console.log(error.response);
        reject(error.response);
    });
  })
}

export const getStorageToken  = () => async(dispatch) => {
  //console.log("innin")
  try {
    const value = await localStorage.getItem("loginDetails")
    var obj = JSON.parse(value);
    //var access = (obj.access);
    console.log(obj, "token");
    dispatch({
      type: ACCESS_TOKEN,
      payload: obj
  });      
    if(value !== null) {
      
    }
  } catch(e) {
    // error reading value
    console.log(e)
  }
}
