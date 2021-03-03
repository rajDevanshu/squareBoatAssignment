import React, { Component } from 'react';
//styles
import './styles.scss';
//redux
import { ForgotPassword } from '../../redux/actions/forgetPasswordActions';
import {connect} from 'react-redux';
//const history = useHistory();
import history from '../../history';

class Forgot extends Component {
    
   state ={
           email: ''
       }
   

    handleChnage = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value});
    }

    handleSubmit = () => {
        
        this.props.ForgotPassword(this.state.email)
        .then((res) => {
            history.push('/reset-password');
            window.location.reload();
         })
         .catch((error) => { 
            console.log({error})})
    }

    render(){
        console.log(this.state.email)
        return(
            <div className='forget-body'>
                <div className='forget-box'>
                 <p className='forgot-title'>Forgot your password?</p>
                     <p className='forgot-title desc'>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
                        <p className='input-title'>Email Address*</p>
                            <input 
                            className='forget-input'
                            placeholder='Enter your mail'
                            required
                            onChange={this.handleChnage}
                            name="email"
                            />                 
                    <div className='submit-cont'>
                        <button className='submit-button' onClick={this.handleSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({ForgotPassword}) => {
    //CategoryReducer defined in reducer index file
    return {
        forgotDetails: ForgotPassword.forgotDetails,
    };
  };

  export default connect(mapStateToProps, {ForgotPassword})(Forgot);