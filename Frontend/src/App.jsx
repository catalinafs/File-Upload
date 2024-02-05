// React
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

// Pages
import Upload from './pages/Upload';
import NotFound from './pages/NotFound';

// Material UI
import theme from './utils/theme';
import { ThemeProvider } from '@mui/material';

import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={'/'} exact element={<Upload />} />
          <Route path={'/NotFound'} exact element={<NotFound />} />
          <Route path={'*'} exact element={<Navigate to='/NotFound' />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;