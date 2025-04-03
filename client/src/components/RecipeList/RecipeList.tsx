import { List, ListItem, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { RenderRecipeList } from '../../pages/RecipeListPage/RecipeListPage';

interface RecipeListProps {
  recipes: RenderRecipeList;
}

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: 0 }}>
      {recipes.map((recipe) => (
        <ListItem
          key={recipe.idMeal}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: 'calc(25% - 16px)',
            border: '1px solid #ddd',
            borderRadius: 2,
            padding: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              {recipe.strMeal}
            </Typography>
            <Button component={Link} to={`/information/${recipe.idMeal}`} variant="contained" fullWidth>
              view recipe
            </Button>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
