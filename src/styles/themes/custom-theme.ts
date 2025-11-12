import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const BluePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{blue.600}',        // main color for buttons, highlights, etc.
          inverseColor: '#ffffff',
          hoverColor: '{blue.700}',
          activeColor: '{blue.800}'
        }
      },
      dark: {
        primary: {
          color: '{blue.400}',
          inverseColor: '{blue.950}',
          hoverColor: '{blue.300}',
          activeColor: '{blue.200}'
        }
      }
    }
  }
});
