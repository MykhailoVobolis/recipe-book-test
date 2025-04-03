import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface Recipe {
  idMeal: string;
  strMeal: string;
}

interface RelatedRecipesProps {
  relatedRecipes: Recipe[];
}

export default function RelatedRecipes({ relatedRecipes }: RelatedRecipesProps) {
  return (
    <Box sx={{ padding: 2, borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h5" gutterBottom>
        Recipes from the same category:
      </Typography>
      {relatedRecipes.length > 0 && (
        <List>
          {relatedRecipes.map((recipe) => (
            <ListItem
              key={recipe.idMeal}
              component={Link}
              to={`/recipe/${recipe.idMeal}`}
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease, background-color 0.3s ease',
                },
              }}
            >
              <ListItemText primary={recipe.strMeal} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
