import createHttpError from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import {
  getAllRecipes,
  getRecipesByCategory,
  getRecipesByCountry,
  getRecipesByIngredient,
  getRecipesInfoById,
} from '../services/recipes';

export const getRecipesController = async (req: Request, res: Response) => {
  const recipes = await getAllRecipes();

  res.status(200).json({
    status: 200,
    message: 'Successfully found recipes!',
    data: recipes,
  });
};

export const getRecipesByIngredientController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { ingredient } = req.params;
  const recipes = await getRecipesByIngredient(ingredient);

  if (!ingredient) {
    throw createHttpError(404, 'Recipes not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully found recipes!',
    data: recipes,
  });
};

export const getRecipesByCountryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { country } = req.params;
  const recipes = await getRecipesByCountry(country);

  if (!country) {
    throw createHttpError(404, 'Recipes not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully found recipes!',
    data: recipes,
  });
};

export const getRecipesByCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { category } = req.params;
  const recipes = await getRecipesByCategory(category);

  if (!category) {
    throw createHttpError(404, 'Recipes not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully found recipes!',
    data: recipes,
  });
};

export const getRecipesInfoByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { recipeId } = req.params;
  const recipes = await getRecipesInfoById(recipeId);

  if (!recipeId) {
    throw createHttpError(404, 'Recipe not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully found recipe!',
    data: recipes,
  });
};
