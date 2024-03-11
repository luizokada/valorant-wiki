import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/themes/default';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

//prevent error console.log

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <AppRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
