import './App.css';
import ChangeLangComponent from './Components/ChangeLangComponent/ChangeLangComponent';
import CounterComponent from './Components/CounterComponent/CounterComponent';
import HelloComponent from './Components/HelloComponent/HelloComponent';
import VisibleComponent from './Components/VisibleComponent/VisibleComponent';
import { connect } from "react-redux";
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.isVisible ? (<div>
          <CounterComponent />

          <HelloComponent />
          <ChangeLangComponent /></div>) : (<div>Hidded</div>)
        }

        <VisibleComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.isVisible,
  };
};
export default connect(mapStateToProps)(App);
