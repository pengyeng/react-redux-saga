const genericReducer = (state = {type: 'GET_GENERIC_LISTING',}, action) => {

    switch (action.type) {
      case 'GET_GENERIC_LISTING':
        console.log("GET_GENERIC_LISTING - REDUCER");  
        return { ...state, loading: true };
      case 'GENERIC_LISTING_RECEIVED':
        console.log("GET_GENERIC_RECEIVED");
        return { ...state, genericData: action.json, loading: false };
      default:
        return state;
    }
  };
  
  export default genericReducer;