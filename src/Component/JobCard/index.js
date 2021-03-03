import React, { Component } from 'react';
import Viewapplicant from '../ApplicantModal';
//styles
import './styles.scss';


export default class card extends Component{

    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
        }

    render(){
        const {position,desc,city,view,applied} = this.props;
        return(
            <div>
                <p className={applied ? 'position applied': 'position'}>{this.Capitalize(position)}</p>
                   <p className='jd'>{desc}</p>
                        <div className='card-footer'>
                            <p className='city'>{this.Capitalize(city)}</p>                            
                            {view?<p className={applied ? 'view-app broad': 'view-app'}>{view}</p>:null}
                        </div>
                    <Viewapplicant/>
            </div>
        )
    }
}
