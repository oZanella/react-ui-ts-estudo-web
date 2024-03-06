import { Button, Box } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useDrawerContext, useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route path="/pagina-inicial" element={
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Button variant="contained" color='primary' onClick={toggleDrawerOpen}>Toggle Drawer</Button>
          <Button variant="contained" color='primary' onClick={toggleTheme}>Toggle Theme</Button>
        </Box>
      } />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};