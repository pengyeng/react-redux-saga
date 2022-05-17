import React, { Component } from "react";
import Loading from './Loading'
import DataGridPanel from './DataGridPanel'
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getDataModule } from "../modules/data/dataModule";


export default function Dynamic() {
    return(
      <DynamicModuleLoader modules={[getDataModule()]}>
       <Loading />
      <DataGridPanel/>
      </DynamicModuleLoader>
  );
}
 

