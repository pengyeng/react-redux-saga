import React from "react";
import {
  Route,
  NavLink,
} from "react-router-dom";

const News = React.lazy(() => import('./News'));

export function NewsMenuItem() {
    return <li><NavLink to="/news">News</NavLink></li>;    
  }


export function NewsLink() {   
  return <Route path="/news" component={News}/>;
}