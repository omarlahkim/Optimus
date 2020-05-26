// Import your theme from theme folder
import { Theme } from './Soft/index';

// Don't change anything here
const { colors, colorsDark } = Theme;

export const themedColors = {
    default: {
        ...colors,
    },
    light: {
        ...colors,
    },
    dark: {
        ...colorsDark,

    },
}
