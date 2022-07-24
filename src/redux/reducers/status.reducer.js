const statusReducer = (state = [], action) => {
    console.log('statusReducer', action.payload);
    switch (action.type) {
       case 'SET_STATUS':
          return action.payload;
        default:
        return state;
    }
  };

  // user will be on the redux state at:
  // state.user
  export default statusReducer;
