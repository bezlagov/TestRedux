import React from "react";
import { translateEng, translateRus } from "../../redux/action";
import { connect } from "react-redux";

class ChangeLangComponent extends React.Component {
    constructor() {
        super();
        this.onClickEng = this.onClickEng.bind(this);
        this.onClickRus = this.onClickRus.bind(this);
    }
    onClickRus() {
        this.props.dispatch(translateRus);
    }
    onClickEng() {
        this.props.dispatch(translateEng);

    }

    render() {
        return <div>
            <button onClick={this.onClickRus}>SetRus</button>
            <button onClick={this.onClickEng}>SetEng</button>
        </div>
    }
}


const mapStateToProps = (state) => {
    return {
        translate: state,
    };
};

export default connect(mapStateToProps)(ChangeLangComponent);

