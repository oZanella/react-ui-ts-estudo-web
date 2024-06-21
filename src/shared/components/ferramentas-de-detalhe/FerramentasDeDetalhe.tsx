import { Box, Button, Icon, Paper, useTheme } from '@mui/material';

export const FerramentasDeDetalhe: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      gap={1}           //funciona apenas no display flex, mostrando a distancia entre eles
      margin={1}        //margem basica do box dos componetes
      padding={1}       //espaço interno, assim separando internamente
      paddingX={2}      //faz com que o padding seja aplicado apenas encima e embaixo (X)
      display='flex'
      alignItems='center'
      height={theme.spacing(5)}
      component={Paper}
    >
      <Button
        color='primary'
        disableElevation
        variant='contained'
        endIcon={<Icon>add</Icon>}
      >Salvar</Button>
      <Button
        color='primary'
        disableElevation
        variant='outlined'
        endIcon={<Icon>add</Icon>}
      >Salvar e Voltar</Button>
      <Button
        color='primary'
        disableElevation
        variant='outlined'
        endIcon={<Icon>add</Icon>}
      >Apagar</Button>
      <Button
        color='primary'
        disableElevation
        variant='outlined'
        endIcon={<Icon>add</Icon>}
      >Voltar</Button>
      <Button
        color='primary'
        disableElevation
        variant='outlined'
        endIcon={<Icon>add</Icon>}
      >Novo</Button>
    </Box>
  );
};