import React from "react";
import {  getCarListing } from '../modules/data/dataAction'
import { connect } from 'react-redux';

class CustomToolbar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("test");  
    this.props.getData();
  };

  exportNewFormat(event){
    console.log("export new format");
    console.log(this.props);
    //this.props.getData;
    this.props.getData;
  }  



  render() {
    return (
    <div>
      <button onClick={this.props.getData}>
        New Export Format          
      </button>
    </div>   
    );
  }

};


const mapDispatchToProps = {
    getData:  getCarListing,
  };

CustomToolbar = connect(
    null,
    mapDispatchToProps,
)(CustomToolbar);

export default CustomToolbar;
