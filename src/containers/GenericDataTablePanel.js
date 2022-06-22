import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import {  getGenericListing } from '../modules/generic/genericAction';
import {  submitGenericData } from '../modules/generic/genericAction';
import GenericDataToolbar from "./GenericDataToolbar";
import Button from '@material-ui/core/Button';
import GenericDataConfig from '../generic-data-config.json'

class GenericDataTablePanel extends React.Component {
  
    componentDidMount() {
      var module = this.state.module;
      var moduleConfig = GenericDataConfig.find(function(e) {
        return e.module == module;
      })
      var urlGetItems = moduleConfig.url;
      this.props.getGenericListing(module,urlGetItems);
    };

    constructor(props) {
      super(props);
      var myStructure = [];
      var module = this.props.module

      this.state = {
        module: this.props.module
      }
      var moduleConfig = GenericDataConfig.find(function(e) {
        return e.module == module;
      })
      myStructure = moduleConfig.columns;

      for (let i = 0; i < myStructure.length; i++) {
        this.setState({[myStructure[i]] : ''});

      }

      this.handleChange = this.handleChange.bind(this);
      this.saveRecord = this.saveRecord.bind(this);
      this.props.sendMessage; 
    }
    
    handleChange(event) {
      this.setState({[event.target.id] : event.target.value});
    }

    handleSubmit(event) {
      //alert('A name was submitted: ' + this.state.value);
      console.log(event);
      event.preventDefault();
    }

    saveRecord(event) {
      console.log("save record...");
      var module = this.props.module
      var moduleConfig = GenericDataConfig.find(function(e) {
        return e.module == module;
      })
      var myStructure = [];
      myStructure = moduleConfig.columns;
      console.log(this.state.Manufacturer);
      var stringPayLoad = "{";
      for (let i = 0; i < myStructure.length; i++) {
        stringPayLoad = stringPayLoad+'"'+myStructure[i]+'":"'+this.state[myStructure[i]]+'"'
        if (i != myStructure.length-1){
          stringPayLoad = stringPayLoad+",";
        }
      }
      stringPayLoad = stringPayLoad +'}';
      console.log(stringPayLoad);
      var payLoad = {};
      var payLoadContent = JSON.parse(stringPayLoad);
      var payLoad = {"TableName": moduleConfig.table,"Item": payLoadContent};
      console.log(payLoad);
      this.props.submitGenericData(module,moduleConfig.createUrl,payLoad);

    }

    render() {

      // Set Module title, columns, toolbar options and data
      const {module} = this.state;
      var moduleConfig = GenericDataConfig.find(function(e) {
        return e.module == module;
      })
      var title = moduleConfig.title;
      var myColumns = moduleConfig.columns;
      var myRecord = moduleConfig.structure;
      var options = {};
      var myData = [];
      var myTableData = [];

      options = {
        rowPerPage: 2,
        rowPerPageOption: [2],
        customToolbar: () => {
            return (
              <GenericDataToolbar module={module}/>
            );
        },
      };  
      myData = this.props.genericData.genericData;

      // Check empty data for different module
      if (myData == null){
        return(<div></div>);
      }else{
          myTableData = myData.Items;  
      }
      return (
        <div style={{ height: 500, width: '100%' }}>
        <MUIDataTable title={title}
           data={myTableData}
           columns={myColumns}
           options={options}
        />
        <br></br>
        <div>
        <form onSubmit={this.handleSubmit}>
            {myRecord.map((value,index)=> {
              //var columnId = "data."+value.label 
              return <TextField id={value.label} label={value.label}  multiline maxRows={7} onChange={this.handleChange} />
            })}
            <br></br>&nbsp;<br></br>
            <Button variant="contained" onClick={this.saveRecord}>Create Record</Button>
        </form>
        </div>
      </div>);
    };

  }

const mapDispatchToProps = {
  getGenericListing,
  submitGenericData
};

const mapStateToProps = (state) => ({
  genericData: state.data,
})

GenericDataTablePanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenericDataTablePanel);

export default GenericDataTablePanel;