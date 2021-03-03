import React, { Component } from 'react';
//styles
import './styles.scss';

export default class LogIn extends Component {
    
   
    render(){
        return(
            <div className='reset-body'>
              <div className='reset-box'>
                 <p className='reset-title'>Reset password</p>
                    <p className='reset-title desc'>Enter your new password below.</p>
                         <p className='input-title'>New Password*</p>
                         <input 
                         className='reset-input'
                         placeholder='New Password'
                         />    

                         <p className='input-title'>Confirm Password*</p>
                            <input 
                            className='reset-input'
                            placeholder='Confrim Password'
                            />     

                <div className='submit-cont'>
                    <button className='submit-button'>Reset</button>
                </div>

              </div>
            </div>
        )
    }
}