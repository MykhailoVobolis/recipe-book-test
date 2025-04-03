import { Typography } from '@mui/material';

interface InstructionsProps {
  instructions: string;
}

export default function Instructions({ instructions }: InstructionsProps) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Instructions:
      </Typography>
      <Typography variant="body1">{instructions}</Typography>
    </>
  );
}
