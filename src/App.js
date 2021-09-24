import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './utils/themeConfig';
import ContainerApp from './components/ContainerApp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContainerApp />
    </ThemeProvider>
  );
}

export default App;
