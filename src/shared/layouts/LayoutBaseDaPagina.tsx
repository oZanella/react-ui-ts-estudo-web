import { Box, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseDaPaginaprops {
  children: ReactNode;
  titulo: string;
  FerramentasDaListagem: ReactNode;
}

export const LayoutBaseDaPagina: React.FC<ILayoutBaseDaPaginaprops> = ({ children, titulo, FerramentasDaListagem }) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display="flex" gap={1} alignItems="center" height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>)}

        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          whiteSpace="nowrap"                           //nao deixa quebrar linha, assim ficando fixo
          overflow="hidden"                             //nao permite que o texto passe do limite
          textOverflow="alipses"                               //final do texto vai motrar "..." se tiver mais txt
        >
          {titulo}
        </Typography>
      </Box>

      {FerramentasDaListagem && (
        <Box>
          {FerramentasDaListagem}
        </Box>
      )}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
