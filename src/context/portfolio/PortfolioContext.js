import { createContext, useReducer } from "react"
import portfolioReducer from "./PortfolioReducer"

const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {
  // My default state
  const initialState = {
    loading: true,
    menu: false,
    projects: {},
    error: null,
    pageLoad: false,
  }

  const [state, dispatch] = useReducer(portfolioReducer, initialState)

  return (
    <PortfolioContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioContext
