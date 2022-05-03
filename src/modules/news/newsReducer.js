const newsReducer = (state = {}, action) => {
    
    switch (action.type) {
      case 'GET_NEWS':
        console.log("GET NEWS...");
        return { ...state, loading: true };
      case 'NEWS_RECEIVED':
        console.log("NEWS RECEIVED...");
        console.log(action.json[0]);
        return { ...state, news: action.json[0], loading: false };
      default:
        return state;
    }
  };
  
  export default newsReducer;