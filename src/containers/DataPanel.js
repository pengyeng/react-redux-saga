import React, { Component } from "react";
import { DataGrid, GridRowsProp, GridColDef,GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { connect } from 'react-redux'
import {  getCarListing } from '../modules/data/dataAction'
 
const columns: GridColDef[] = [
    { field: 'Year', headerName: 'Year', width: 150 },
    { field: 'Price', headerName: 'Price', width: 150 },
    { field: 'Model', headerName: 'Model', width: 250 },
    { field: 'Manufacturer', headerName: 'Manufacturer', width: 150 },
  ];

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
}

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
      return (
        <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={this.props.carData.cars} columns={columns} components={{Toolbar: CustomToolbar,}} />
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
