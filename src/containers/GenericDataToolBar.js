import React from "react";
import {  getGenericListing } from '../modules/generic/genericAction'
import { connect } from 'react-redux';
import exportCSV from '../common/Export';
import GenericDataConfig from '../generic-data-config.json'

class GenericDataToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      module: this.props.module
    }
    this.exportNewFormat = this.exportNewFormat.bind(this);
    
  }
  
  exportNewFormat() {
    var module = this.props.module
    var moduleConfig = GenericDataConfig.find(function(e) {
      return e.module == module;
    })
    this.props.getData(module,moduleConfig.url);
    const opts = moduleConfig.columns
    exportCSV(opts,this.props.genericData.genericData.Items);

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
    getData:  getGenericListing,
  };

const mapStateToProps = (state) => ({
    genericData: state.data,
  })

GenericDataToolbar = connect(
    mapStateToProps,
    mapDispatchToProps,
)(GenericDataToolbar);

export default GenericDataToolbar;
