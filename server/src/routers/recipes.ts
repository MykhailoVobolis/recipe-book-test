import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper';
import {
  getRecipesByCategoryController,
  getRecipesByCountryController,
  getRecipesByIngredientController,
  getRecipesController,
  getRecipesInfoByIdController,
} from '../controllers/recipes';

const router = Router();

router.get('/', ctrlWrapper(getRecipesController));

router.get(
  '/by-ingredient/:ingredient',
  ctrlWrapper(getRecipesByIngredientController),
);

router.get('/by-country/:country', ctrlWrapper(getRecipesByCountryController));

router.get(
  '/by-category/:category',
  ctrlWrapper(getRecipesByCategoryController),
);

router.get('/by-id/:recipeId', ctrlWrapper(getRecipesInfoByIdController));

export default router;
