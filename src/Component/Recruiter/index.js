import React, { Component } from 'react';
//styles
import './styles.scss';
//redux
import { SignupData } from '../../redux/actions/signupactions';
import {connect} from 'react-redux';
//const history = useHistory();
import history from '../../history';



class Recruiter extends Component{

    constructor(props){
        super(props);
        this.state={
            name :false,
            email: false,
            password:false,
            confirm:false,
            skills:false,
            nameMissing: false,
            emailMissing: false,
            passwordMissing: false,
            confrimMissing:false,
            skillsMissing: false,
            fullName:'',
            emailVal:'',
            passwordVal:'',
            skillsVal:'',
            confirmVal:'',
            invalidCredentials : false
        }
    }
  
    handleInput = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value,skills:true,skillsMissing:false,confirm:true,confirmMissing:false,password:true,
        passwordMissing:false,email:true,emailMissing:false,name:true, nameMissing:false});
    }

    submitHandler = () => {
        
        if(this.state.fullName.length > 2){
            if(this.state.emailVal.length > 2){
                if(this.state.passwordVal.length > 5){
                    if(this.state.passwordVal === this.state.confirmVal){
                        if(this.state.skillsVal.length > 2){
          
                            let body ={
                                email: this.state.emailVal,
                                userRole: 0, 
                                password: this.state.passwordVal,
                                confirmPassword: this.state.confirmVal,
                                name: this.state.fullName,
                                skills: this.state.skillsVal
                            }
                            console.log(body);
                            
                            this.props.SignupData(body)
                            .then((res) => {
                                history.push('/log-in');
                                window.location.reload();
                            })
                            .catch((error) => { 
                                console.log({error})})
                                this.setState({
                                    invalidCredentials: true
                                })
                            }else{
                                this.setState({
                                    skillsMissing: true
                                })
                            }}else{
                                this.setState({
                                    confirmMissing: true
                                })
                            }}
                            else{
                                this.setState({
                                    passwordMissing:true
                                })
                            }}
                            else{
                                this.setState({
                                    emailMissing:true
                                })
                            }}else{                
                                    this.setState({
                                        nameMissing : true
                                    })
                                }
                    }

    render(){
        const {nameMissing,emailMissing, passwordMissing,skillsMissing,confirmMissing,invalidCredentials}=this.state;
        return(
            <div>
                <div className='desc-container'>
                    <p className='login-contents'>Full Name*</p>
                        <input 
                            className={nameMissing ? 'login-input missing-input': 'login-input'}
                            placeholder='Enter your name'   
                            onChange={this.handleInput}    
                            name="fullName"                            
                        />  
                    {nameMissing ? <p className='missing'>This Field is mandatory</p> : null}  
                </div>

                <div className='desc-container'>
                    <p className='login-contents'>Email Address*</p>
                        <input 
                            className={emailMissing ? 'login-input missing-input': 'login-input'}
                            placeholder='Enter your email'   
                            onChange={this.handleInput}    
                            name="emailVal"                            
                        />    
                    {emailMissing ? <p className='missing'>This Field is mandatory</p> : null} 
                    {invalidCredentials ? <p className="missing">Already Registered or Wrong Email </p> : null}
                </div>

                <div className='desc-container2'>
                    <div className='create-password'>
                        <div>
                            <p className='login-contents'>Create Password*</p>
                            <input 
                                className={passwordMissing ? 'login-input-pass missing-input': 'login-input-pass'}
                                placeholder='Enter password'    
                                onChange={this.handleInput}      
                                name="passwordVal"                          
                            />  
                            {passwordMissing ? <p className='missing'>Password must be at least 6</p> : null}  
                        </div>
                        <div>
                            <p className='login-contents'>Confirm Password*</p>
                            <input 
                                className={confirmMissing ? 'login-input-pass missing-input': 'login-input-pass'}
                                placeholder='Confirm password'    
                                onChange={this.handleInput}      
                                name="confirmVal"                          
                            /> 
                            {confirmMissing ? <p className='missing'>Both are not equal</p> : null}  
                        </div> 
                    </div>
                </div>
                
                <div className='desc-container2 m'>
                    <p className='login-contents'>Skills*</p>
                        <input 
                        className={skillsMissing ? 'login-input missing-input': 'login-input'}
                        placeholder='Enter your Skills'   
                        onChange={this.handleInput}           
                        name="skillsVal"                     
                            /> 
                        {skillsMissing? <p className='missing'>This Field is mandatory</p> : null}               
                </div>

                <div className='button-container'>
                     <button className='button-container' onClick={this.submitHandler}>
                        <p className='login-button'>Signup</p>
                     </button>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = ({SignupReducer}) => {
    //CategoryReducer defined in reducer index file
    return {
        signupDetails: SignupReducer.signupDetails,
    };
  };

  export default connect(mapStateToProps, {SignupData})(Recruiter);