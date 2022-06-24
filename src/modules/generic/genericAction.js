export const getGenericListing = (module,url) => ({
    type: 'GET_GENERIC_LISTING',module,url
  });


  export const submitGenericData = (module,createUrl,url,payLoad) => ({
    type: 'SUBMIT_GENERIC_DATA',module,createUrl,url,payLoad
  });  