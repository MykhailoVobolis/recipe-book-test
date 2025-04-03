import { Box, Typography, CircularProgress, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Ingredients from '../../components/Ingredients/Ingredients';
import RelatedRecipes from '../../components/RelatedRecipes/RelatedRecipes';
import RecipeArea from '../../components/RecipeArea/RecipeArea';
import Instructions from '../../components/Instructions/Instructions';
import api from '../../helpers/api';

interface Meal {
  idMeal: string;
  strMeal: string;
  strArea: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  [key: string]: string;
}

interface ApiResponse {
  data: {
    meals: Meal[];
  };
}

export default function RecipeInfoPage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<Meal>({} as Meal);
  const [loading, setLoading] = useState<boolean>(true);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [relatedRecipesCategory, setRelatedRecipesCategory] = useState<Meal[]>([]);

  const getIngredients = (recipe: { [key: string]: string }) => {
    return Object.keys(recipe)
      .filter((key) => key.startsWith('strIngredient'))
      .map((key) => recipe[key])
      .filter((ingredient) => ingredient.trim() !== '');
  };

  const fetchRecipeInfo = async () => {
    try {
      setLoading(true);
      const response = await api.get<ApiResponse>(`/recipes/by-id/${recipeId}`);
      const fetchedRecipe = response.data.data.meals[0];
      setRecipe(fetchedRecipe);
      setIngredients(getIngredients(fetchedRecipe));

      if (fetchedRecipe.strCategory) {
        const categoryResponse = await api.get<ApiResponse>(`/recipes/by-category/${fetchedRecipe.strCategory}`);
        setRelatedRecipesCategory(categoryResponse.data.data.meals);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipeInfo();
  }, [recipeId]);

  return loading ? (
    <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
  ) : (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ position: 'relative', marginBottom: 3 }}>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              style={{ width: '50%', height: 'auto', borderRadius: '10px' }}
            />
          </Box>
          <Typography variant="h3" align="center" gutterBottom>
            {recipe.strMeal}
          </Typography>
          <RecipeArea recipeArea={recipe.strArea} />
          <Divider sx={{ marginBottom: 3 }} />
          <Instructions instructions={recipe.strInstructions} />
          <Divider sx={{ marginBottom: 3 }} />
          <Ingredients ingredients={ingredients} />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '30%' }, minWidth: 250 }}>
          {relatedRecipesCategory && <RelatedRecipes relatedRecipes={relatedRecipesCategory} />}
        </Box>
      </Box>
    </Box>
  );
}
