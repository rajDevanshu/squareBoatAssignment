import React, { Component } from 'react';
//components
import Header from '../../Component/Header';
//styles
import './styles.scss';

export default class PostJob extends Component{
    render(){
        return(
            <div className='postjob-page-style'>
                <div className='postjob-head'>
                    <div className='postjob-banner-style'>
                        <Header 
                        jobsapplied={'jobsapplied'}
                        />
                    </div>
                </div>
            </div>
        )
    }
}