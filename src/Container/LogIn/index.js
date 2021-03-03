import React, { Component } from 'react';
//components
import Header from '../../Component/Header';
//styles
import './styles.scss';

export default class LogIn extends Component {
    render(){
        return(
            <div className='log-in-page-style'>
                <div className='login-head'>
                    <div className='log-in-banner-style'>
                        <Header 
                            login={'login'}
                        />
                    </div>
                </div>
            </div>

        )
    }
}