import { Link } from 'react-router-dom';
import { Chip, Box, Typography } from '@mui/material';
import { useRecipe } from '../../RecipeContext';

interface IngredientsProps {
  ingredients: string[];
}

export default function Ingredients({ ingredients }: IngredientsProps) {
  const { setIngredient } = useRecipe();

  const handleIngredientClick = (ingredient: string) => {
    setIngredient(ingredient);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Ingredients:
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {ingredients.map((ingredient, index) => (
          <Link
            key={index}
            to={'/'}
            style={{ textDecoration: 'none' }}
            onClick={() => handleIngredientClick(ingredient)}
          >
            <Chip label={ingredient} sx={{ marginBottom: 1 }} />
          </Link>
        ))}
      </Box>
    </>
  );
}
