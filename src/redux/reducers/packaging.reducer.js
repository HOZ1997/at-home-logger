const packagingReducer = (state = [], action) => {
    console.log('packagingReducer', action.payload);
    switch (action.type) {
       case 'SET_PACKAGING':
          return action.payload;
        default:
        return state;
    }
  };

  // user will be on the redux state at:
  // state.user
  export default packagingReducer;
