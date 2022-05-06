import React, { Component,Suspense } from "react";
import {
    Route,
    NavLink,
    HashRouter,
  } from "react-router-dom";
import Home from "./Home";
import {NewsMenuItem, NewsLink} from './menulink-APP_MODE';
const Weather = React.lazy(() => import('./Weather'));
const Data = React.lazy(() => import('./Data'));

function HomeLink(){
  return <Route path="/home" component={Home}/>;
}
function WeatherLink(){
  return <Route path="/weather" component={Weather}/>;
}
function DataLink(){
  return <Route path="/datagrid" component={Data}/>;
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
            <li><NavLink to="/datagrid">Data Grid</NavLink></li>
            <NewsMenuItem/>
          </ul>
          <div className="content">
          <React.Suspense fallback={<div>loading...</div>}>
            <HomeLink/>
            <WeatherLink/>
            <DataLink/>
            <NewsLink/>
          </React.Suspense>    
          </div>  
        </div>
        </HashRouter>
    );
  }
}

export default Menu