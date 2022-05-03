const weatherReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_WEATHER':
        return { ...state, loading: true };
      case 'GET_ERROR':
        return { ...state, loading: true };
      case 'WEATHER_RECEIVED':
        return { ...state, weather: action.json[0], loading: false }      
      default:
        return state;
    }
  };
  
  export default weatherReducer;
  