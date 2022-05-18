import React from "react";
import {  getPhoneListing } from '../modules/phone/phoneAction'
import { connect } from 'react-redux';
import exportCSV from '../common/Export';

class PhoneDataToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.exportNewFormat = this.exportNewFormat.bind(this);
  }

  componentDidMount() {
    console.log("test"); 
    console.log(this.props);
  };
  
  exportNewFormat() {
    console.log("export new format");
    this.props.getData();

    const opts = ['Manufacturer','Model','Year','Price'];
    
    exportCSV(opts,this.props.phoneData.phones.Items);
  }


  render() {
    console.log("Phone Data Toolbar")
    return (
    <div>
      <button onClick={this.exportNewFormat}>
        Export
      </button>
    </div>   
    );
  }

};

const mapDispatchToProps = {
    getData:  getPhoneListing,
  };

const mapStateToProps = (state) => ({
    phoneData: state.data,
  })

PhoneDataToolbar = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PhoneDataToolbar);

export default PhoneDataToolbar;
