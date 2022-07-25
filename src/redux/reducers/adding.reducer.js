const addingReducer = (state = [], action) => {
    console.log('addingReducer', action.payload);
    switch (action.type) {
       case 'SET_ADD_ITEM':
          return action.payload;
        default:
        return state;
    }
  };

  // user will be on the redux state at:
  // state.user
  export default addingReducer;
