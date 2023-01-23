import React from 'react';
import MainPage from './pages/MainPage';
import GlobalStyles from './styles/global'
import { baseTheme } from './styles/theme';
import { Provider } from 'react-redux'
import store from './redux/store/index'
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <MainPage />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
