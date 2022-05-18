import React from "react";
import {  getCarListing } from '../modules/data/dataAction'
import { connect } from 'react-redux';
import exportCSV from '../common/Export';

class CarDataToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.exportNewFormat = this.exportNewFormat.bind(this);
  }
  
  exportNewFormat() {
    this.props.getData();
    const opts = ['Manufacturer','Model','Year','Price'];
    exportCSV(opts,this.props.carData.cars);
  }

  render() {
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
    getData:  getCarListing,
  };

const mapStateToProps = (state) => ({
    carData: state.data,
  })

CarDataToolbar = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CarDataToolbar);

export default CarDataToolbar;
