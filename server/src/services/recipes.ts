import axios from 'axios';
import { env } from '../utils/env';

const baseURL = env('API_BASE_URL') as string;

const api = axios.create({
  baseURL,
});

export const getAllRecipes = async () => {
  const url = 'search.php?s=';
  const response = await api.get(url);
  return response.data;
};

export const getRecipesByIngredient = async (ingredient: string) => {
  const url = `filter.php?i=${ingredient}`;
  const response = await api.get(url);
  return response.data;
};

export const getRecipesByCountry = async (country: string) => {
  const url = `filter.php?a=${country}`;
  const response = await api.get(url);
  return response.data;
};

export const getRecipesByCategory = async (category: string) => {
  const url = `filter.php?c=${category}`;
  const response = await api.get(url);
  return response.data;
};

export const getRecipesInfoById = async (id: string) => {
  const url = `lookup.php?i=${id}`;
  const response = await api.get(url);
  return response.data;
};
