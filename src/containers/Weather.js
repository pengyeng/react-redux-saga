import React, { Component } from "react";
import WeatherButton from './WeatherButton';
import ErrorButton from './ErrorButton';
import Loading from './Loading'

import {ConnectedWeather} from './WeatherPanel'
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getWeatherModule } from "../modules/weather/weatherModule";

export default function Dynamic() {
  return(
  <DynamicModuleLoader modules={[getWeatherModule()]}>
  <div>
        <h2>Weather UI</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <WeatherButton />  
        <ErrorButton />  
        <Loading />
        <ConnectedWeather />

  </div>
  </DynamicModuleLoader>
  );
}