import { Box, Chip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface IngredientsProps {
  ingredients: string[];
}

export default function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Ingredients:
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {ingredients.map((ingredient, index) => (
          <Link key={index} to={`/recipes/ingredient/${ingredient}`} style={{ textDecoration: 'none' }}>
            <Chip label={ingredient} sx={{ marginBottom: 1 }} />
          </Link>
        ))}
      </Box>
    </>
  );
}
