import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//styles
import './styles.scss';
//images
import HeaderImage from '../../assets/images/header.jpg';
//components
import LogIn from '../LoginCard';
import Signup from '../SignupCard';
import FogotPasword from '../ForgotPasswordCard';
import ResetPassword from '../ResetPasswordCard';
import JobCard from '../JobCard';
import CreateJobCard from '../CreateJobCard';
//redux
import { AllJobs } from '../../redux/actions/allJobsActions';
import {getStorageToken} from '../../redux/actions/loginActions';
import {connect} from 'react-redux';


class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.props.getStorageToken()
        this.props.AllJobs()
        .then((res) =>
    {
        this.setState({
            data: res.data
        })
    })
    .catch(
        error => {console.log(error)}
    )
    }

    render(){
        const {home,login,signup,forgotPassword,resetPassword,postjob,jobsforyou,jobsapplied,createJob} = this.props;
       
        return(
            <div className='header-style'>
                <div className='top-section'>
                
                    <Link to='/' className='title' >
                        <p className='title'>My<span style={{color:'#43AFFF'}}>Jobs</span></p>
                    </Link>   
                        
                        {home?
                            <Link to='/log-in'>
                                <p className='log-sign'>LogIn/SignUp</p>    
                            </Link>
                            :
                            [
                                postjob ? 
                                <div className='postjob'>
                                <Link to='/create-job'>
                                    <p className='post-a-job'>Post a Job</p>  
                                </Link>
                                    <p className='logged-in'>R</p> 
                                </div>
                                :
                                [
                                    jobsforyou ?
                                    <div className='postjob'>
                                        <Link to='/jobs-applied'>
                                            <p className='post-a-job'>Applied Jobs</p> 
                                        </Link> 
                                            <p className='logged-in'>R</p>  
                                    </div>
                                    :
                                    [
                                        jobsapplied?
                                        <div className='postjob'>
                                            <Link to='/jobs-applied'>
                                                <p className='post-a-job active'>Applied Jobs</p> 
                                            </Link> 
                                                <p className='logged-in'>R</p>  
                                        </div>
                                        :
                                        [createJob ?  
                                        <div className='postjob'>
                                            <p className='post-a-job active'>Post a Job</p>  
                                            <p className='logged-in'>R</p> 
                                        </div>
                                        :null]
                                    ]
                                ]                 
                            ]                  
                        }
                    </div>

                    {
                        postjob?
                            <div>
                                <p className='home-button' to='/'>Home</p>
                                    <p className='posted-by-you'>Jobs Posted by You</p>
                                    <div>
                                        <div className='job-cards'>
                                            <JobCard 
                                                position={'UI/UX Designer'}
                                                desc={'Lorem ipsum dolor sit amet, consectet sed do eiusmod tempor incididunt…'}
                                                city={'Bangalore'}
                                                view={'View Application'}
                                                applied={'applied'}
                                            />                                     
                                        </div>
                                        </div>
                            </div>
                    :[
                        jobsforyou?
                        <div >
                            <p className='home-button' to='/'>Home</p>
                                <p className='posted-by-you'>Jobs For You</p>
                                <div className='row'>
                                    <div className='card-box'>
                                                            
                                                {this.state.data.map((item,index) => {
                                                    return(
                                                        <div className='job-cards '>  
                                                        <JobCard 
                                                    position={item.title}
                                                    desc={item.description}
                                                    city={item.location}
                                                    view={'Apply'}
                                                />   </div>
                                                    )
                                                })}                                     
                                    
                                    </div>
                                </div>
                        </div>
                        :
                        [
                            jobsapplied?
                            <div>
                                <p className='home-button' to='/'>Home / Applied Jobs</p>
                                    <p className='posted-by-you'>Jobs Applied By You</p>
                                        <div>
                                            <div className='job-cards'>
                                                <JobCard 
                                                    position={'UI/UX Designer'}
                                                    desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…'}
                                                    city={'Bangalore'}
                                                    view={''}
                                                    applied={'applied'}
                                                />                                      
                                            </div>
                                        </div>
                            </div>
                            :null]]
                    }

                    {home?
                        <div className='body-header'>
                            <div  className='body-title'>
                                <p className='welcome-note'>Welcome to My<span style={{color:'#43AFFF'}}>Jobs</span></p>
                                <p className='get-started'>Get Started</p>
                            </div>
                                <img
                                src={HeaderImage}
                                className='header-image'
                                alt='header-image'
                                />
                        </div>
                        : [ 
                            login?
                                <LogIn />
                            :
                            [signup?
                            <Signup />:
                            [
                                forgotPassword?                                    
                                <FogotPasword/>  
                                :
                                [resetPassword?
                                <ResetPassword/>
                                :
                                [createJob ?   
                                <CreateJobCard /> 
                                :null]]
                            ]]
                        ]                
                    }
                        
                    </div>
            )
    }
}


const mapStateToProps = ({AllJobsReducer, LogInReducer}) => {
    //CategoryReducer defined in reducer index file
    return {
        allJobs: AllJobsReducer.allJobs,
        loginDetails: LogInReducer.loginDetails,
    };
  };

  export default connect(mapStateToProps, {AllJobs,getStorageToken})(Header);