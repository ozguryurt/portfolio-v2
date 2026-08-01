import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import AllProjects from './pages/AllProjects.tsx'
import MainLayout from './layouts/MainLayout.tsx';
import Home from './pages/Home.tsx';
import Skills from './pages/Skills.tsx';
import Contact from './pages/Contact.tsx';
import Projects from './pages/Projects.tsx';
import languageStore from './stores/languageStore.ts';

function RootRedirect() {
  const { lang } = languageStore()
  return <Navigate to={`/${lang}`} replace />
}

createRoot(document.getElementById('ozguryurtdev')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path=":lang" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="yetenekler" element={<Skills />} />
        <Route path="skills" element={<Skills />} />
        <Route path="iletisim" element={<Contact />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projeler" element={<Projects />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projeler/tumu" element={<AllProjects />} />
        <Route path="projects/all" element={<AllProjects />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
