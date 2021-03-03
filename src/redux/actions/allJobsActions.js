import axios from 'axios';
import { JOBS_FOR_YOU } from './actionTypes';

export const AllJobs = () => (dispatch) => {

    return new Promise((resolve,reject)=>{
    axios
    .get('https://jobs-api.squareboat.info/api/v1/jobs')
    .then((res) => {      
        dispatch({
            type: JOBS_FOR_YOU,
            payload: res.data
        });
        resolve(res.data);
        console.log(res.data,"check")
    })
    .catch((err) => {
        reject(err.res);
        console.log(err,"check")
    });
    })        
}