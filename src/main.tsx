import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FrozenPortfolio from '../FrozenPortfolio';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FrozenPortfolio />
  </StrictMode>
);
