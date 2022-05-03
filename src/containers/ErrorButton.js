import React from 'react';
import { connect } from 'react-redux';
import { getError } from '../modules/weather/weatherAction';

let styles = {
  backgroundColor: 'HotPink',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

class ErrorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={this.props.getError}
      >Get Error</button>
    );
  }

};

const mapDispatchToProps = {
  getError: getError,
};

ErrorButton = connect(
  null,
  mapDispatchToProps,
)(ErrorButton);

export default ErrorButton;

