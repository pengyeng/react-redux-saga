export const getGenericListing = (module,url) => ({
    type: 'GET_GENERIC_LISTING',module,url
  });


  export const submitGenericData = (module,createUrl,payLoad) => ({
    type: 'SUBMIT_GENERIC_DATA',module,createUrl,payLoad
  });  