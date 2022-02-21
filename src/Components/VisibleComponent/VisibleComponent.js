import React from "react";
import { setVisible } from "../../redux/action";
import { connect } from "react-redux";

class VisibleComponent extends React.Component {
    constructor() {
        super();
        this.onClickShowHide = this.onClickShowHide.bind(this);
    }

    onClickShowHide(){
        this.props.dispatch(setVisible);
    }

    render(){
        return (
            <div>
                <button onClick={this.onClickShowHide}>Show/Hide</button>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log("this ... " + state.isVisible);
    return{
        isVisible: state.isVisible,
    };
};

export default connect(mapStateToProps)(VisibleComponent);