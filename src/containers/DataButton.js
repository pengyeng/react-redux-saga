import React from 'react';
import { connect } from 'react-redux';
import {  getCarListing } from '../modules/data/dataAction'

let styles = {
  backgroundColor: 'HotPink',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

class DataButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };    
    //this.props.getData;
    console.log("run constructor...");
    this.props.sendMessage;
  }


  render() {
    return (
      <div>
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={this.props.getData}
      >Press to Load Data</button>
      </div>
    );
  }

};

const mapDispatchToProps = {
  getData:  getCarListing,
};

DataButton = connect(
  null,
  mapDispatchToProps,
)(DataButton);

export default DataButton;

