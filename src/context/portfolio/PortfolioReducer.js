/* eslint-disable default-case */
const portfolioReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      }
    case "SET_MENU":
      return {
        ...state,
        menu: action.payload,
      }
    case "GET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default portfolioReducer
