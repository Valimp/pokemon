import { Route, Routes } from "react-router-dom"
import Characters from "./pages/Characters"
import FightScene from "./pages/FightScene"

function App() {
  return (
    <Routes>
      <Route path="/Characters" element={<Characters />} />
      <Route path="/FightScene" element={<FightScene />} />
    </Routes>
  )
}

export default App
