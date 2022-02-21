import React from "react";
import { connect } from "react-redux";
import { actionDec, actionInc } from "../../redux/action";


class CounterComponent extends React.Component {
    constructor() {
        super();
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickDec = this.handleClickDec.bind(this);
    }
    componentDidMount() {
        alert("Counter did mount");
    }

    componentWillUnmount() {
        alert("Counter will unmount");
    }
    
    handleClickAdd() {
        this.props.dispatch(actionInc);
    }
    handleClickDec() {
        this.props.dispatch(actionDec);
    }

    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={this.handleClickAdd}>Plus</button>
                <button onClick={this.handleClickDec}>Minus</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

export default connect(mapStateToProps)(CounterComponent);