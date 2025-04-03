import { Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import FilterSelect from '../FilterSelect/FilterSelect';

interface SelectBarProps {
  ingredientFilter: string;
  countryFilter: string;
  categoryFilter: string;
  handleIngredientChange: (event: SelectChangeEvent<string>) => void;
  handleCountryChange: (event: SelectChangeEvent<string>) => void;
  handleCategoryChange: (event: SelectChangeEvent<string>) => void;
  getUniqueValues: (key: string) => string[];
}

export default function SelectBar({
  ingredientFilter,
  countryFilter,
  categoryFilter,
  handleIngredientChange,
  handleCountryChange,
  handleCategoryChange,
  getUniqueValues,
}: SelectBarProps) {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row', marginBottom: 2 }}>
      <FilterSelect
        label="Filter by Ingredient"
        category="Ingredients"
        value={ingredientFilter}
        onChange={handleIngredientChange}
        options={getUniqueValues('strIngredient')}
      />
      <FilterSelect
        label="Filter by Country"
        category="Countries"
        value={countryFilter}
        onChange={handleCountryChange}
        options={getUniqueValues('strArea')}
      />
      <FilterSelect
        label="Filter by Category"
        category="Categories"
        value={categoryFilter}
        onChange={handleCategoryChange}
        options={getUniqueValues('strCategory')}
      />
    </Box>
  );
}
