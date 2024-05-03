
import { Route, Routes } from "react-router-dom"
import Characters from "./pages/Characters"
import FightScene from "./pages/FightScene"
import Home from "./pages/Home"
import HomeMap from "./pages/HomeMap"
import Accueil from "./pages/Accueil"

function App() {
  return (
    <Routes>
      <Route path="/Characters" element={<Characters />} />
      <Route path="/FightScene" element={<FightScene />} />
      <Route path="/" element={<Home />} />
      <Route path="/maps" element={<HomeMap />} />
      <Route path="/accueil" element={<Accueil />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default App
