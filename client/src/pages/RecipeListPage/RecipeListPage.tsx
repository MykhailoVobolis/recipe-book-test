import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, SelectChangeEvent } from '@mui/material';
import SelectBar from '../../components/SelectBar/SelectBar';
import RecipeList from '../../components/RecipeList/RecipeList';

interface ApiResponse {
  data: {
    meals: Recipe[];
  };
}

interface Recipe {
  idMeal: string;
  strMeal: string;
  strArea: string;
  strCategory: string;
  strIngredient: string;
}

export type RenderRecipeList = Recipe[];

export default function RecipeListPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [ingredientFilter, setIngredientFilter] = useState<string>('all');
  const [countryFilter, setCountryFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await axios.get<ApiResponse>(`http://localhost:3000/recipes`);
      setFilteredRecipes([]);
      setRecipes(response.data.data.meals);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const getUniqueValues = (key: string) => {
    const uniqueValues = new Set<string>();

    recipes.forEach((recipe) => {
      if (key === 'strArea' || key === 'strCategory') {
        if (recipe[key]) {
          uniqueValues.add(recipe[key]);
        }
      } else if (key === 'strIngredient') {
        Object.keys(recipe).forEach((ingredientKey) => {
          if (ingredientKey.startsWith('strIngredient') && recipe[ingredientKey as keyof Recipe]) {
            uniqueValues.add(recipe[ingredientKey as keyof Recipe]);
          }
        });
      }
    });

    return Array.from(uniqueValues).sort();
  };

  const handleFilterChange = async (type: string, value: string) => {
    if (value === 'all') {
      fetchRecipes();
      return;
    }
    setLoading(true);

    try {
      let url = '';
      switch (type) {
        case 'ingredient':
          url = `http://localhost:3000/recipes/by-ingredient/${value}`;
          break;
        case 'country':
          url = `http://localhost:3000/recipes/by-country/${value}`;
          break;
        case 'category':
          url = `http://localhost:3000/recipes/by-category/${value}`;
          break;
        default:
          throw new Error('Unknown filter type');
      }

      const response = await axios.get<ApiResponse>(url);
      setFilteredRecipes(response.data.data.meals);
    } catch (error) {
      console.error('Error fetching filtered recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleIngredientChange = (event: SelectChangeEvent<string>) => {
    const selectedIngredient = event.target.value;
    setIngredientFilter(selectedIngredient);
    setCountryFilter('all');
    setCategoryFilter('all');
    handleFilterChange('ingredient', selectedIngredient);
  };

  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    const selectedCountry = event.target.value;
    setCountryFilter(selectedCountry);
    setIngredientFilter('all');
    setCategoryFilter('all');
    handleFilterChange('country', selectedCountry);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    const selectedCategory = event.target.value;
    setCategoryFilter(selectedCategory);
    setIngredientFilter('all');
    setCountryFilter('all');
    handleFilterChange('category', selectedCategory);
  };

  const renderRecipes: RenderRecipeList = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Recipe List Page
      </Typography>
      <SelectBar
        ingredientFilter={ingredientFilter}
        countryFilter={countryFilter}
        categoryFilter={categoryFilter}
        handleIngredientChange={handleIngredientChange}
        handleCountryChange={handleCountryChange}
        handleCategoryChange={handleCategoryChange}
        getUniqueValues={getUniqueValues}
      />
      {loading ? (
        <CircularProgress
          sx={{
            display: 'block',
            margin: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ) : (
        <RecipeList recipes={renderRecipes} />
      )}
    </Box>
  );
}
