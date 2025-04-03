import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

interface FilterSelectProps {
  label: string;
  category: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: string[];
}

export default function FilterSelect({ label, category, value, onChange, options }: FilterSelectProps) {
  return (
    <FormControl variant="outlined" sx={{ flex: 1 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} label={label}>
        <MenuItem value="all">All {category}</MenuItem>
        {options &&
          options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
