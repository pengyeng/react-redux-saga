import React, { Component } from "react";
import { withTransaction } from '@elastic/apm-rum-react'
import NewsButton from './NewsButton';
import Loading from './Loading'
import img from '../star.png'

import {ConnectedNewsItem} from './NewsItem'
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getNewsModule } from "../modules/news/newsModule";



export default withTransaction('News UI','page-load')(function Dynamic() {
  return(
  <DynamicModuleLoader modules={[getNewsModule()]}>
  <div>
    <img height="10%" width="10%" src={img} />
    <h2>GOT QUESTIONS?</h2>
    <p>The easiest thing to do is post on
    our <a href="http://forum.kirupa.com">forums</a>.
    </p>
    <NewsButton />  
    <Loading />
    <ConnectedNewsItem />        
  </div>
  </DynamicModuleLoader>
  );
})

//export default (indicatorRUM) ?  withTransaction('News UI', 'page-load')(News) : News