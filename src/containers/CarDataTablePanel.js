import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { connect } from 'react-redux'
import {  getCarListing } from '../modules/data/dataAction'
import CarDataToolbar from "./CarDataToolbar";

const myColumns = ["Manufacturer", "Model", "Year", "Price"];
const title = "Car List";   
   
const options = {
    rowPerPage: 2,
    rowPerPageOption: [2],
    customToolbar: () => {
        return (
          <CarDataToolbar />
        );
    },
};

class CarDataTablePanel extends React.Component {
  
    componentDidMount() {
      this.props.getCarListing();
    };

    constructor(props) {
      super(props);
      this.props.sendMessage; 
    }

    render() {
      if (this.props.carData == null){
        return(<div></div>);
      }
      if (this.props.carData.cars == null){
        console.log(this.props.carData);
        return(<div></div>);
      } 
  
      return (
        <div style={{ height: 500, width: '100%' }}>
        <MUIDataTable title={title}
           data={this.props.carData.cars}
           columns={myColumns}
           options={options}
        />
      </div>);
    };

  }

const mapDispatchToProps = {
  getCarListing
};

const mapStateToProps = (state) => ({
  carData: state.data,
})

CarDataTablePanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarDataTablePanel);

export default CarDataTablePanel;
