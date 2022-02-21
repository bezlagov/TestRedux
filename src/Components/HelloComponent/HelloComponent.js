import React from "react";
import { connect } from "react-redux";

class HelloComponent extends React.Component{
    
    render(){
        return <div>{this.props.helloMessage}</div>
    }
}

const mapStateToProps = (state) =>{
    return{
        helloMessage: state.helloMessage,
    };
};

export default connect(mapStateToProps)(HelloComponent);