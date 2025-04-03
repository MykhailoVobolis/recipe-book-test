import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { RecipeProvider } from './RecipeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecipeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecipeProvider>
  </StrictMode>,
);
