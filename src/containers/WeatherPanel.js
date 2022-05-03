import React from 'react';
import { connect } from 'react-redux'

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}
const errorMessage = {
  color: 'red'
}

const WeatherPanel = ({ weather }) => {
  if (weather == null) {
    return <div></div>;
  }
  console.log(weather);
  var myWeather = weather.weather;
  if (myWeather ==  null){
    return <div></div>;
  }
  return(
    <div style={articleStyle} >
      
      {myWeather.main && <div>
        <h1>{myWeather.main}</h1>
        <h2>{myWeather.description}</h2>
      </div>}
    </div>
  )  
//);
};

const mapStateToProps = (state) => ({
  weather: state.weather,
})

/*
WeatherPanel = connect(
  mapStateToProps,
  null
)(WeatherPanel)
*/
//export default WeatherPanel;
export const ConnectedWeather = connect(mapStateToProps,null)(WeatherPanel);

