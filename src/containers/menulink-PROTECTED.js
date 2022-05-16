import React from "react";
import {
  Route,
  NavLink,
} from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';

const News = React.lazy(() => import('./News'));

export function NewsMenuItem() {
    return <MenuItem component={NavLink} to="/news">News</MenuItem>;    
  }


export function NewsLink() {   
  return <Route path="/news" component={News}/>;
}