const phoneReducer = (state = {type: 'GET_PHONE_LISTING',}, action) => {
    
    switch (action.type) {
      case 'GET_PHONE_LISTING':
        console.log("GET_PHONE_LISTING - REDUCER");  
        return { ...state, loading: true };
      case 'PHONE_LISTING_RECEIVED':
        console.log("GET_PHONE_RECEIVED");
        return { ...state, phones: action.json, loading: false };
        case 'SUBMIT_PHONE':
          console.log("SUBMIT PHONE - REDUCER");  
          return { ...state, loading: true };
        case 'PHONE_SUBMIT_SUCCESSFUL':
          console.log("PHONE_SUBMIT_SUCCESSFUL");
          return { ...state, phones: action.json, loading: false };
      default:
        return state;
    }
  };
  
  export default phoneReducer;