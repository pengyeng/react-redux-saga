import React from "react";
import Loading from './Loading'
import PhoneDataTablePanel from './PhoneDataTablePanel'
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getPhoneModule } from "../modules/phone/phoneModule";

export default function Dynamic() {
    return(
      <DynamicModuleLoader modules={[getPhoneModule()]}>
       <Loading />
      <PhoneDataTablePanel/>
      </DynamicModuleLoader>
  );
}