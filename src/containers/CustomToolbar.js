import React from "react";
import {  getCarListing } from '../modules/data/dataAction'
import { connect } from 'react-redux';


const getJson = () => {
  const data = {data: "dummy"};
  return JSON.stringify(data, null, 2);
};

const exportBlob = (blob, filename) => {
  // Save the blob in a json file
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  });
};

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
    ///console.log(this.props);
    //this.props.getData;
    const jsonString = getJson();
    const blob = new Blob([jsonString], {
      type: 'text/json',
    });

    exportBlob(blob, 'demo.json');

  }

  render() {
    return (
    <div>
      <button onClick={this.exportNewFormat}>
        New Export Format (JSON)         
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
