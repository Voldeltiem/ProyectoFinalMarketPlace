import { createContext, useContext } from "react"
const MyContext = createContext({})
export const useData = () => useContext(MyContext);
export default MyContext