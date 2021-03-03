import React, { Component } from 'react';
//styles
import './styles.scss';

export default class WhyCard extends Component{
    render(){
        return(
            <div className='whyus-card-comp'>
                <div className='body-whyus'>
                    <p className='whyus-title'>Get more visibility</p>
                    <p className='whyus-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>

                <div className='body-whyus'>
                    <p className='whyus-title'>Organize your candidates</p>
                    <p className='whyus-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>

                <div className='body-whyus'>
                    <p className='whyus-title'>Verify their abilities</p>
                    <p className='whyus-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        )
    }
}