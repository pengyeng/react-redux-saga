import React from "react";
import Loading from './Loading'
import GenericDataTablePanel from './GenericDataTablePanel'
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getGenericModule } from "../modules/generic/genericModule";

export default function Dynamic() {
    return(
      <DynamicModuleLoader modules={[getGenericModule("phone")]}>
       <Loading />
      <GenericDataTablePanel module = "phone" />
      </DynamicModuleLoader>
  );
}