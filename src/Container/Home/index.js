import React, { Component } from 'react';
//components
import Header from '../../Component/Header';
import WhyUsCard from '../../Component/WhyUs-Card';
//styles
import './styles.scss';
//images'
import CompanyName from '../../assets/images/companylogo.png';

class Home extends Component {
    render(){
        return(
            <div className='home-page-style'>
                <div className='head'>
                    <div className='header-banner-style'>  
                        <div>
                            <Header
                                home='home'
                            /> 
                        </div>
                    </div>  
                </div>      
                <div className='body-home'>
                    <p className='why-us'>Why Us</p>
                        <div className='why-us-card'>
                            <div className='width'>
                                 <WhyUsCard/>
                            </div>
                        </div>

                    <p className='why-us'>Companies Who Trust Us</p>
                        <div className='logo-align'>
                            <img
                                source={CompanyName}
                                className='logos'
                                alt="logos"
                            />
                             <img
                                source={CompanyName}
                                className='logos'
                                alt="logos"
                            />
                             <img
                                source={CompanyName}
                                className='logos'
                                alt="logos"
                            />
                              <img
                                source={CompanyName}
                                className='logos'
                                alt="logos"
                            />
                             <img
                                source={CompanyName}
                                className='logos'
                                alt="logos"
                            />
                        </div>
                </div>         
            </div>
        )
    }
}

export default Home;