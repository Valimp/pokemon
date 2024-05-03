import { Route, Routes } from "react-router-dom"
import Characters from "./pages/Characters"
import FightScene from "./pages/FightScene"
import Home from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/Characters" element={<Characters />} />
      <Route path="/FightScene" element={<FightScene />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default App
