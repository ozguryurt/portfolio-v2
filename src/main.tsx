import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Main from './pages/Main.tsx';
import Projects from './pages/Projects.tsx'
import MainLayout from './layouts/MainLayout.tsx';

createRoot(document.getElementById('ozguryurtdev')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Main />} />
        <Route path="/projeler" element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
