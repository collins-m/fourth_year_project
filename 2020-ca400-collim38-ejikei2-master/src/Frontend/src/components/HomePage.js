import React, {Component} from 'react';

class HomePage extends Component{
    //Responsible for the grey area with large welcome sign
    render(){
        return(
            <div className= "container"> 
                <div className= "Jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Welcome</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage