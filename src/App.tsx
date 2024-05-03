import { Routes, Route } from "react-router-dom"


import Home from "./pages/Home"
import HomeMap from "./pages/HomeMap"
import Accueil from "./pages/Accueil"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maps" element={<HomeMap />} />
      <Route path="/accueil" element={<Accueil />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default App
