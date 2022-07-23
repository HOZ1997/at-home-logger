const categoryReducer = (state = [], action) => {
    console.log('categoryReducer', action.payload);
    switch (action.type) {
       case 'SET_CATEGORY':
          return action.payload;
        default:
        return state;
    }
  };

  // user will be on the redux state at:
  // state.user
  export default categoryReducer;
