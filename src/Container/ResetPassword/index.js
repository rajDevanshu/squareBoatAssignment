import React, { Component } from 'react';
//components
import Header from '../../Component/Header';
//styles
import './styles.scss';

export default class LogIn extends Component {
    render(){
        return(
            <div className='reset-page-style'>
                <div className='reset-head'>
                    <div className='reset-banner-style'>
                        <Header 
                            resetPassword={'resetPassword'}
                        />
                    </div>
                </div>
            </div>

        )
    }
}