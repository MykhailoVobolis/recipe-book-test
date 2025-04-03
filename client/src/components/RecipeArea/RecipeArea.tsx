import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useRecipe } from '../../RecipeContext';

interface AreaProps {
  recipeArea: string;
}

export default function RecipeArea({ recipeArea }: AreaProps) {
  const { setRecipeArea } = useRecipe();

  const handleAreaClick = (recipeArea: string) => {
    setRecipeArea(recipeArea);
  };

  return (
    <Typography variant="h5" align="center" gutterBottom>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => handleAreaClick(recipeArea)}>
        {recipeArea}
      </Link>
    </Typography>
  );
}
