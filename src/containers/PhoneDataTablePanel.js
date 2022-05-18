import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { connect } from 'react-redux'
import {  getPhoneListing } from '../modules/phone/phoneAction';
import PhoneDataToolbar from "./PhoneDataToolbar";

const myColumns = ["Manufacturer", "Model", "Capacity", "Price"];
const title = "Phone List";   

const myOptions = {
  rowPerPage: 2,
  rowPerPageOption: [2],
  customToolbar: () => {
      return (
        <PhoneDataToolbar/>
      );
  },
};


class PhoneDataTablePanel extends React.Component {
  
    componentDidMount() {
      this.props.getPhoneListing();
    };

    constructor(props) {
      super(props); 
    }
    
    render() {
      
      console.log(this.props)  
      if (this.props.phoneData == null){ 
        return(<div>loading...</div>);
      }
      if (this.props.phoneData.phones == null){
        return(<div>loading...</div>);
      } 
      
      return (
        <div style={{ height: 500, width: '100%' }}>
        <MUIDataTable title={title}
           data={this.props.phoneData.phones.Items}
           columns={myColumns}
           options={myOptions}
        />
      </div>);
    };

  }

const mapDispatchToProps = {
  getPhoneListing
};

const mapStateToProps = (state) => ({
  phoneData: state.data,
})

PhoneDataTablePanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneDataTablePanel);

export default PhoneDataTablePanel;
