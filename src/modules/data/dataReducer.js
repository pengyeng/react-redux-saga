const dataReducer = (state = {type: 'GET_CAR_LISTING',}, action) => {
    
    switch (action.type) {
      case 'GET_CAR_LISTING':
        console.log("GET_CAR_LISTING - REDUCER");  
        return { ...state, loading: true };
      case 'CAR_LISTING_RECEIVED':
        console.log("GET_CAR_RECEIVED");
        return { ...state, cars: action.json, loading: false };
      default:
        return state;
    }
  };
  
  export default dataReducer;