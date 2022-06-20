import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { connect } from 'react-redux'
import {  getCarListing } from '../modules/data/dataAction'
import {  getPhoneListing } from '../modules/phone/phoneAction';
import CarDataToolbar from "./CarDataToolbar";
import PhoneDataToolbar from "./PhoneDataToolbar";

class GenericDataTablePanel extends React.Component {
  
    componentDidMount() {

      // Invoke module API
      const {module} = this.state;
      if (module == "car"){ 
        this.props.getCarListing();
      }else{
        this.props.getPhoneListing();
      }

    };

    constructor(props) {
      super(props);
      this.state = {
        module: this.props.module
      }
      console.log(this.props.module)
      this.props.sendMessage; 
    }

    render() {

      // Set Module title, columns, toolbar options and data
      const {module} = this.state;
      console.log(module);
      var title = "";
      var myColumns = [];
      var options = {};
      var myData = [];
      var myTableData = [];
      
      if (module == "car"){
        title= "Car List"
        myColumns = ["Manufacturer", "Model", "Year", "Price"];
        options = {
            rowPerPage: 2,
            rowPerPageOption: [2],
            customToolbar: () => {
                return (
                  <CarDataToolbar />
                );
            },
        };  
        myData = this.props.carData;
      }else{
        title = "Phone List"
        myColumns = ["Manufacturer", "Model", "Capacity", "Price"];
        options = {
            rowPerPage: 2,
            rowPerPageOption: [2],
            customToolbar: () => {
                return (
                  <PhoneDataToolbar />
                );
            },
        };
        myData = this.props.phoneData;
      }

      // Check empty data for different module
      if (myData == null){
        return(<div></div>);
      }else{
        if (module == "car"){
          myTableData = myData.cars;
        }else{
          if (myData.phones == null){
            return(<div></div>);
          }else{  
            myTableData = myData.phones.Items;
          }  
        }  
      }

  
      return (
        <div style={{ height: 500, width: '100%' }}>
        <MUIDataTable title={title}
           data={myTableData}
           columns={myColumns}
           options={options}
        />
      </div>);
    };

  }

const mapDispatchToProps = {
  getCarListing,
  getPhoneListing
};

const mapStateToProps = (state) => ({
  phoneData: state.data,
  carData: state.data,
})

GenericDataTablePanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenericDataTablePanel);

export default GenericDataTablePanel;
