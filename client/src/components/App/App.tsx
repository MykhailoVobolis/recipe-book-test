import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const RecipeListPage = lazy(() => import('../../pages/RecipeListPage/RecipeListPage'));
const RecipeInfoPage = lazy(() => import('../../pages/RecipeInfoPage/RecipeInfoPage'));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<RecipeListPage />} />
        <Route path="/information/:recipeId" element={<RecipeInfoPage />} />
      </Routes>
    </Suspense>
  );
}
