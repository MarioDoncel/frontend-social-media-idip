import { ThemeProvider } from 'styled-components';
import { NewContextProvider } from './providers/NewContextProvider';
import Router from './routes';
import { theme } from './styles/theme';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewContextProvider>
        <Router />
      </NewContextProvider>
    </ThemeProvider>
  );
}

export default App;
