import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//styles
import './styles.scss';
//redux
import { LogInData } from '../../redux/actions/loginActions';
import {connect} from 'react-redux';
//const history = useHistory();
import history from '../../history';


class LogIn extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            password: false,
            passwordVal:'',
            email:false,
            emailmissing:false,
            redirect: false,
            emailid: '',
            failed : ''
    }
}

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value, password:true,email:true,passwordMissing:false,emailmissing:false});
    }

    handleSubmit1 = (e) => {
      //  e.preventdefault();

      if(this.state.emailid.length > 2 && this.state.passwordVal>5){
        let body ={
            email: this.state.emailid,
            password: this.state.passwordVal
        }

        console.log(body);
        
        this.props.LogInData(body)
        .then((res) => {
            history.push('/jobs-for-you');
            window.location.reload();
         })
         .catch((error) => { 
            console.log(error.message)})
            this.setState({
                failed : "error.data.message"
            })
         }else{
             this.setState({
                 emailmissing: true,
                 passwordMissing: true
             })
         }
    }

    
    render(){
        const {emailmissing}=this.state;
       // window.location.reload();
       console.log(this.state.emailid, this.state.passwordVal);
        return(
            <div className='login-body'>
              <div className='login-box' >
                <p className='login-title'>Login</p>
                   <p className='login-contents'>Email Address</p>
                            <input 
                            type="text"
                            name='emailid'
                            className='login-input'
                            placeholder='Enter your email' 
                            onChange={this.handleChange}                                
                        />       
                        
                        <div className='password-container'>
                            <div className='password'>
                                <p className='login-contents'>Password</p>
                                <Link to='/forgot-password'  style={{textDecoration:'none', outline:'none'}}>
                                    <p className='forget'>Forgot your password?</p>
                                </Link>
                            </div>   
                                                 
                            <input 
                                type="password"
                                name="passwordVal"
                                className='login-input'
                                placeholder='Enter your password' 
                                onChange={this.handleChange}                   
                            />
                            {emailmissing  ?<p className='missing'>Missing id or incorrect password</p>:null}
                            {this.state.failed ? <p className='missing'>Unregistered user or Wrong Credentials</p>:null}
                        
                        </div>

                        <div className='button-container'>
                            <button className='button-container' onClick={this.handleSubmit1}>
                                <p className='login-button'>Login</p>
                            </button>
                        </div>
                        

                        <div className='newto-myjobs' >
                            <p>New to MyJobs? <span ><Link to='/sign-up' style={{color:'#43AFFF', textDecoration:'none'}}>
                            Create an account
                            </Link></span></p>
                        </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = ({LogInReducer}) => {
    //CategoryReducer defined in reducer index file
    return {
        loginDetails: LogInReducer.loginDetails,
    };
  };

  export default connect(mapStateToProps, {LogInData})(LogIn);