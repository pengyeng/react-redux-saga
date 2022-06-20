import React from "react";
import Loading from './Loading'
import GenericDataTablePanel from './GenericDataTablePanel'
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getGenericModule } from "../modules/generic/genericModule";
import {useParams} from "react-router-dom";

export default function Dynamic() {
    let { module } = useParams();
    return(
      <DynamicModuleLoader modules={[getGenericModule({module})]}>
       <Loading />
      <GenericDataTablePanel module = {module} />
      </DynamicModuleLoader>
  );
}