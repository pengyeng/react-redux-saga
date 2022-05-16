import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { connect } from 'react-redux'
import {  getCarListing } from '../modules/data/dataAction'
import CustomToolbar from "./CustomToolbar";

const columns = ["Name", "Company", "City", "State"];
const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
   ];
   
const options = {

    customToolbar: () => {
        return (
          <CustomToolbar />
        );
    },
};
   
class DataPanel extends React.Component {
  
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
        <MUIDataTable title={"Employee List"}
           data={data}
           columns={columns}
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

DataPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataPanel);

export default DataPanel;
