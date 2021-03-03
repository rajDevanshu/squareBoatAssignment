import React, { Component } from 'react';
//components
import Header from '../../Component/Header';
//styles
import './styles.scss';

export default class LogIn extends Component {
    render(){
        return(
            <div className='forget-page-style'>
                <div className='forget-head'>
                    <div className='forget-banner-style'>
                        <Header 
                            forgotPassword={'forgotPassword'}
                        />
                    </div>
                </div>
            </div>

        )
    }
}