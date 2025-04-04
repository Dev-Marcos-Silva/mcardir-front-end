import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalStyle } from './styles/global.js';
import { theme } from './styles/theme.js';

import { ThemeProvider } from 'styled-components';
import { Router } from './routes/index.jsx';
import { AuthProvider } from './hooks/authContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>

        <AuthProvider>
          <Router/>
        </AuthProvider>
    
    </ThemeProvider>
  </StrictMode>,
)
