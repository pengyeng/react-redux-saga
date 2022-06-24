import React, { Component } from "react";
import { connect } from 'react-redux'
import MUIDataTable from "mui-datatables";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  getGenericListing } from '../modules/generic/genericAction';
import {  submitGenericData } from '../modules/generic/genericAction';
import GenericDataToolbar from "./GenericDataToolbar";
import GenericDataConfig from '../generic-data-config.json'


const errorPrefix = "error_";

class GenericDataTablePanel extends React.Component {
    
    componentDidMount() {
      var urlGetItems = this.state.ScreenConfig.url;
      this.props.getGenericListing(this.state.module,urlGetItems);
    };

    constructor(props) {
      super(props);
      var module = this.props.module
      var moduleConfig = GenericDataConfig.find(function(e) {
        return e.module == module;
      })
      console.log(moduleConfig);
      //Start: Costruct State Object
      var stringState = '{"module":"'+this.props.module+'","ScreenConfig":'+JSON.stringify(moduleConfig)+",";
      var myStructure = moduleConfig.structure;
      for (let i = 0; i < myStructure.length; i++) {
        stringState = stringState+'"'+myStructure[i].label+'"'+':""';
        if (i != (myStructure.length -1)){
          stringState = stringState+","
        }
      }
      stringState=stringState+"}";
      this.state = JSON.parse(stringState);
      //End: Costruct State Object
      
      this.handleChange = this.handleChange.bind(this);
      this.saveRecord = this.saveRecord.bind(this);
    }
    
    checkNumericValidation(event){
      var inputId = event.target.id.substring(0,event.target.id.length-2);
      if (event.target.id.substring(event.target.id.length-1,event.target.id.length) == "N"){
        var errorField = errorPrefix+inputId;
        if (event.target.value.match("^(0|[1-9][0-9]*)$")) {
          this.setState({[errorField] : ""});  
        }else{
          if (event.target.value == ""){
            this.setState({[errorField] : ""});
          }else{  
            this.setState({[errorField] : "numeric value required"});  
         }  
        }
      }    
    }

    handleChange(event) {
      var inputId = event.target.id.substring(0,event.target.id.length-2);
      this.checkNumericValidation(event);      
      this.setState({[inputId] : event.target.value});
    }

    handleSubmit(event) {
      //alert('A name was submitted: ' + this.state.value);
      console.log(event);
      event.preventDefault();
    }

    saveRecord(event) {
      
      //Start: Costruct Payload Object         
      var myStructure = [];
      myStructure = this.state.ScreenConfig.structure;
      var stringPayLoad = "{";
      for (let i = 0; i < myStructure.length; i++) {
        stringPayLoad = stringPayLoad+'"'+myStructure[i].label+'":"'+this.state[myStructure[i].label]+'"'
        if (i != myStructure.length-1){
          stringPayLoad = stringPayLoad+",";
        }
      }
      stringPayLoad = stringPayLoad +'}';
      var payLoad = {};
      var payLoadContent = JSON.parse(stringPayLoad);
      var payLoad = {"TableName": this.state.ScreenConfig.table,"Item": payLoadContent};
      //End: Costruct Payload Object         
      
      this.props.submitGenericData(this.state.module,this.state.ScreenConfig.createUrl,this.state.ScreenConfig.url,payLoad);
      this.forceUpdate();
    }

    render() {
      // Set Module title, columns, toolbar options and data
      var title = this.state.ScreenConfig.title;
      var myColumns = this.state.ScreenConfig.columns;
      var myRecord = this.state.ScreenConfig.structure;
      var options = {};
      var myData = [];
      var myTableData = [];

      options = {
        rowPerPage: 2,
        rowPerPageOption: [2],
        customToolbar: () => {
            return (
              <GenericDataToolbar module={this.state.module}/>
            );
        },
      };  
      myData = this.props.genericData.genericData;

      // Check empty data
      if (myData == null){
        return(<div></div>);
      }else{
          myTableData = myData.Items;  
      }
      return (
        <div style={{ height: 200, width: '90%' }}>
        <MUIDataTable title={title}
           data={myTableData}
           columns={myColumns}
           options={options}
        />
        <br></br>
        <div>
        <Grid container direction={"column"} m={1} spacing={1} >  
        <Grid item xs={3}>
        <Typography variant="h6" >
        {this.state.ScreenConfig.formtitle}
        </Typography>  
        </Grid>
        <Grid item xs={12}>
            {myRecord.map((value,index)=> {
              var inputConfig = {maxLength:value.fieldlength};
              var errorField = errorPrefix+value.label
              var inputId = value.label+"."+value.type
              return <TextField id={inputId} label={value.label}  helperText={this.state[errorField]} inputProps={inputConfig} onChange={this.handleChange} variant="outlined"/>
            })}
        </Grid>    
        </Grid>    
            <br></br>&nbsp;<br></br>            
            <Button variant="contained" onClick={this.saveRecord} color="primary">Create Record</Button>
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