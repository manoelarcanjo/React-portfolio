import Home from './pages/Home/Home';
import About from './pages/About/About';
import Education from './pages/Education/Education'
import Skills from './pages/Skills/Skills'
import Works from './pages/Works/Works'
import Contact from './pages/Contact/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/education" element={<Education/>}></Route>
                <Route path="/skills" element={<Skills/>}></Route>
                <Route path="/works" element={<Works/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;