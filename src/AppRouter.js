import React from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //BrowserRouter as 
//navigation history
import history from './history';
//containers
import Home from './Container/Home';
import LogIn from './Container/LogIn';
import Signup from './Container/SignUp';
import ForgotPassword from './Container/ForgotPassword';
import ResetPassword from './Container/ResetPassword';
import PostJob from './Container/PostJob';
import JobForYou from './Container/JobsForYou';  
import JobsApplied from './Container/JobsApplied';
import CreateJob from './Container/CreateJob';
     
function AppRouter() {  
return (
    <Router history={history}>  
      <Switch>     
        <Route exact path='/' component={Home} />
        <Route exact path='/log-in' component={LogIn} /> 
        <Route exact path='/sign-up' component={Signup} />
        <Route exact path='/forgot-password' component={ForgotPassword} />
        <Route exact path='/reset-password' component={ResetPassword} />
        <Route exact path='/post-job' component={PostJob} />
        <Route exact path='/create-job' component={CreateJob} />
        <Route exact path='/jobs-for-you' component={JobForYou} />  
        <Route exact path='/jobs-applied' component={JobsApplied} />
      </Switch>    
    </Router>
  );
}

export default AppRouter;
