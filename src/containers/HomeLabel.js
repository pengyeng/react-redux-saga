import React, { Component } from "react";

class HomeLabel extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render(){

    return(
        <div>
        <p>{this.props.customlabel}</p>
        <p>test</p>
        </div>
    );
    }
}    

export default HomeLabel;