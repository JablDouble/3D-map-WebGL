import { createTheme } from '@mui/material';

import commonTheme from './commonTheme';
import darkTheme from './darkTheme';

const theme = createTheme(darkTheme, commonTheme);

export { theme };
