import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './modules/Header.tsx'
import Main from './modules/Main.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <Header />
    <Main />
  </>,
)
