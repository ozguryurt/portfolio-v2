import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import AllProjects from './pages/AllProjects.tsx'
import MainLayout from './layouts/MainLayout.tsx';
import Home from './pages/Home.tsx';
import Skills from './pages/Skills.tsx';
import Contact from './pages/Contact.tsx';
import Projects from './pages/Projects.tsx';

createRoot(document.getElementById('ozguryurtdev')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/yetenekler" element={<Skills />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/projeler/tumu" element={<AllProjects />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
