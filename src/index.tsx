import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoutes } from './routes/index.routes';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
