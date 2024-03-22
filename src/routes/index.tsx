import { Button, Box } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useDrawerContext, useAppThemeContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {
  const {setDrawerOptions} = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();


  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página Inicial',
      },
      {
        icon: 'star',
        path: '/cadastro',
        label: 'Cadastros',
      },
      
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    
          <Button variant="contained" color='primary' onClick={toggleTheme}>Toggle Theme</Button>
        </Box>
      } />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};