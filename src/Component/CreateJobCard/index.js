import React, { Component } from 'react';
//styles
import './styles.scss';

export default class LogIn extends Component {
    
   
    render(){
        return(
            <div className='createjob-body'>
              <div className='createjob-box'>
                 <p className='reset-title'>Post a Job</p>
                         <p className='input-title'>Job Title*</p>
                         <input 
                         className='reset-input'
                         placeholder='Enter Job Title'
                         />    

                         <p className='input-title'>Job Description*</p>
                         <input 
                         className='reset-input description'
                         />  

                         <p className='input-title'>Location*</p>
                         <input 
                         className='reset-input'
                         placeholder='Enter Location'
                         />  

                <div className='submit-cont'>
                    <button className='submit-button'>Post</button>
                </div>

              </div>
            </div>
        )
    }
}