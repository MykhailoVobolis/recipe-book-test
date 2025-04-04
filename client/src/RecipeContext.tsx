import React, { createContext, useState, useContext, ReactNode } from 'react';

interface RecipeContextType {
  ingredient: string | null;
  setIngredient: (ingredient: string) => void;

  recipeArea: string | null;
  setRecipeArea: (ingredient: string) => void;

  category: string | null;
  setCategory: (value: string) => void;

  uniqueValues: {
    strArea: string[];
    strCategory: string[];
    strIngredient: string[];
  };

  setUniqueValues: (key: string, values: string[]) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ingredient, setIngredient] = useState<string | null>(null);
  const [recipeArea, setRecipeArea] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [uniqueValues, setUniqueValues] = useState<{
    strArea: string[];
    strCategory: string[];
    strIngredient: string[];
  }>({
    strArea: [],
    strCategory: [],
    strIngredient: [],
  });

  const updateUniqueValues = (key: string, values: string[]) => {
    setUniqueValues((prevState) => ({
      ...prevState,
      [key]: values,
    }));
  };

  return (
    <RecipeContext.Provider
      value={{
        ingredient,
        setIngredient,
        recipeArea,
        setRecipeArea,
        category,
        setCategory,
        uniqueValues,
        setUniqueValues: updateUniqueValues,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = (): RecipeContextType => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipe must be used within a RecipeProvider');
  }
  return context;
};
