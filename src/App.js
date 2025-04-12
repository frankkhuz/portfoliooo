import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Works from "./pages/Works"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Layouts from "./components/layouts/Layouts"
import MobileMenu from "./components/layouts/MobileMenu"
import Skills from "./components/layouts/Skills"
import Loading from "./components/layouts/Loading"
import ProjectItem from "./components/shared/ProjectItem"
import { PortfolioProvider } from "./context/portfolio/PortfolioContext"
import { SkeletonTheme } from "react-loading-skeleton"
import Success from "./pages/Success"

function App() {
  return (
    <PortfolioProvider>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/about" element={<Layouts />}>
              <Route index element={<About />} />
            </Route>
            <Route path="/works" element={<Layouts />}>
              <Route index element={<Works />} />
            </Route>
            <Route path="/contact" element={<Layouts />}>
              <Route index element={<Contact />} />
            </Route>
            <Route path="/menu" element={<MobileMenu />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/project" element={<ProjectItem />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </PortfolioProvider>
  )
}

export default App
