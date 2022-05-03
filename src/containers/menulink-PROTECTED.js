import React from "react";
const News = React.lazy(() => import('./News'));
import {
    Route,
  } from "react-router-dom";

export function NewsLink() {   
  return <Route path="/news" component={News}/>;
}