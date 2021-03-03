import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//styles
import './styles.scss';
//components
import Recruiter from '../Recruiter';
import Candidate from '../Candidate';



export default class Signup extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            recruiter:true,
            candidate:false
    }
}     

    buttonSelection=()=>{
        this.setState({
            recruiter:true,
            candidate:false
        })
    }
    buttonSelection2=()=>{
        this.setState({
            candidate:true,
            recruiter:false
        })
    }
    render(){
        const {candidate, recruiter}=this.state;
        return(
            <div className='signup-body'>
                <div className='signup-box'>
                    <p className='signup-title'>Signup</p>
                        <p className='signup-choice'>I'm a*</p>
                            <div className='choices'>
                                <button className={recruiter ? 'button-choice' : 'button-choice inactive'} onClick={()=>this.buttonSelection()}>Recruiter</button>
                                <button className={candidate ? 'button-choice' : 'button-choice inactive'} onClick={()=>this.buttonSelection2()}>Candidate</button>
                            </div>

                        {recruiter? <Recruiter />:
                            <Candidate />}                       

                            <div className='newto-myjobs' >
                                <p>Have an account? <span ><Link to='/log-in' style={{color:'#43AFFF',textDecoration:'none'}}>
                                Login
                                </Link></span></p>
                            </div>
                </div>
        </div>
        )
    }
}

