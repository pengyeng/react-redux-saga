import React, { Component,Suspense } from "react";
import {
    Route,
    NavLink,
    HashRouter,
  } from "react-router-dom";
import Home from "./Home";
import {NewsLink} from './menulink-APP_MODE';

const Weather = React.lazy(() => import('./Weather'));

const APP_MODE = "PROTECTED";
var MyRoute = Route;

function NewsMenuItem() {
  if (APP_MODE == "GENERAL") {
    return <li></li>;
  }else{
    return <li><NavLink to="/news">News</NavLink></li>;
  }
}
function HomeLink(){
  return <MyRoute path="/home" component={Home}/>;
}
function WeatherLink(){
  return <MyRoute path="/weather" component={Weather}/>;
}

class Menu extends React.Component {
  render() {
    return (
        <HashRouter>          
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/weather">Weather</NavLink></li>
            <NewsMenuItem/>
          </ul>
          <div className="content">
          <React.Suspense fallback={<div>loading...</div>}>
            <HomeLink/>
            <WeatherLink/>
            <NewsLink/>
          </React.Suspense>    
          </div>  
        </div>
        </HashRouter>
    );
  }
}

export default Menu