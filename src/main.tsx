import React, { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import '../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css'
import '../node_modules/aos/dist/aos.css';
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './utils/i18n.ts'
import Loader from './components/loader/Loader.tsx';

const DelayedSuspense: React.FC<{ delay: number }> = ({ delay }) => {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowApp(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return showApp ? <App /> : <Loader />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <React.Suspense fallback={<Loader />}>
      <DelayedSuspense delay={1000}/>
    </React.Suspense>
    </BrowserRouter>
  </StrictMode>,
)
