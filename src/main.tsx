import React from 'react'
import ReactDOM from 'react-dom/client'
import { LazyMotion } from 'framer-motion'
import App from './App'
import './index.css'

// Começa a baixar os recursos de animação imediatamente (em paralelo com a renderização).
// O <link rel="modulepreload"> injetado no build (vite.config.ts) faz o download começar
// antes mesmo deste arquivo executar.
const motionFeatures = import('./lib/motionFeatures').then((mod) => mod.default)
const loadMotionFeatures = () => motionFeatures

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LazyMotion features={loadMotionFeatures}>
      <App />
    </LazyMotion>
  </React.StrictMode>,
)
