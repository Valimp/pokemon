import { Route, Routes } from "react-router-dom"
import Characters from "./pages/Characters"

function App() {
  return (
    <Routes>
      <Route path="/Characters" element = {<Characters/>}/>
    </Routes>
  )
}

export default App
