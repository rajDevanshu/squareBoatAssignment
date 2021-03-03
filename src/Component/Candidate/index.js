import React, { Component } from 'react';
//styles
import './styles.scss';
//redux
import { SignupData } from '../../redux/actions/signupactions';
import {connect} from 'react-redux';
//const history = useHistory();
import history from '../../history';



class Candidate extends Component{

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
            incorrect: false
        }
    }
    name=()=>{
        this.setState({
            name:true,
            nameMissing:false
        })
    }
    email =() => {
        this.setState({
            email: true,
            emailMissing: false
        })
    }
    password = () => {
        this.setState({
            password: true,
            passwordMissing: false
        })
    }
    confirm=()=>{
        this.setState({
           confirm: true,
           confirmMissing: false
        })
    }
    skills=()=>{
        this.setState({
            skills: true,
            skillsMissing: false
        })
    }

    handleInput = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value});
    }
    submitHandler = () => {
        let body ={
            email: this.state.emailVal,
            userRole: 1, 
            password: this.state.passwordVal,
            confirmPassword: this.state.confirmVal,
            name: this.state.fullName,
            skills: this.state.skillsVal
        }
        console.log(body);
        
        this.props.SignupData(body)
        .then((res) => {
            alert(res.data.message)
            if(res.success){
            history.push('/log-in');
            window.location.reload();
            }
         })
         .catch((error) => { 
            
            console.log({error})})
    }

  /*  signUpHandler = () => {
        if(this.state.name){

        if(this.state.email){

            if(this.state.password){

                if(this.state.confirm){

                    if(this.state.skills){
                        let body = {
                            email: "rajdevanshueee@gmail.com",
                            userRole: 0, 
                            password: "1234567",
                            confirmPassword: "1234567",
                            name: "raj",
                            skills: "HTML, CSS, JS"
                        };
                        alert(body.name)
                        this.props.SignupData(body)
                        .then((res) => {
                            history.push('/jobs-for-you');
                            window.location.reload();
                            alert(res.name);
                         })
                         .catch((error) => { 
                            console.log({error})})

                    }else{
                        this.setState({
                            skillsMissing: true
                        })
                    }
                }else{
                    this.setState({
                        confirmMissing: true
                    })
                }
            }else{
                this.setState({
                    passwordMissing:true
                })            }
        }else{
            this.setState({
                emailMissing: true
            })}}
        else{
            this.setState({
                nameMissing:true,
            })
        }
    }*/
    render(){
        const {nameMissing,emailMissing,incorrect, passwordMissing,skillsMissing,confirmMissing}=this.state;
        console.log(this.state.fullName)
        return(
            <div>
                <div className='desc-container'>
                {incorrect ? <p>Please type correctly</p> : null}
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
                            {passwordMissing ? <p className='missing'>This Field is mandatory</p> : null}  
                        </div>
                        <div>
                            <p className='login-contents'>Confirm Password*</p>
                            <input 
                                className={confirmMissing ? 'login-input-pass missing-input': 'login-input-pass'}
                                placeholder='Confirm password'    
                                onChange={this.handleInput}      
                                name="confirmVal"                          
                            /> 
                            {confirmMissing ? <p className='missing'>This Field is mandatory</p> : null}  
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
                        {skillsMissing ? <p className='missing'>This Field is mandatory</p> : null}               
                </div>

                <div className='button-container'>
                     <button className='button-container' onClick={()=>this.submitHandler()}>
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

  export default connect(mapStateToProps, {SignupData})(Candidate);