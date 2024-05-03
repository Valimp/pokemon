import { Routes, Route } from "react-router-dom"
import FightPage from "./pages/FightPage"

import Home from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fight" element={<FightPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default App
