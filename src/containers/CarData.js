import React from "react";
import Loading from './Loading'
import CarDataTablePanel from './CarDataTablePanel'
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getDataModule } from "../modules/data/dataModule";


export default function Dynamic() {
    return(
      <DynamicModuleLoader modules={[getDataModule()]}>
       <Loading />
      <CarDataTablePanel/>
      </DynamicModuleLoader>
  );
}