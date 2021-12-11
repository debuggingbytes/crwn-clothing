const INITIAL_STATE = {
  currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {
  //Return state based off action
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }

    default:
      return state;
  }

}

export default userReducer