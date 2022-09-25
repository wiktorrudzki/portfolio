import { useContext } from 'react';
import { SliderContext } from '@contexts/slider';

const useSlider = () => {
  const context = useContext(SliderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export { useSlider };
