import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;

  aoCliclarEmNovo?: () => void;
  aoCliclarEmVoltar?: () => void;
  aoCliclarEmApagar?: () => void;
  aoCliclarEmSalvar?: () => void;
}
export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,

  aoCliclarEmNovo,
  aoCliclarEmVoltar,
  aoCliclarEmApagar,
  aoCliclarEmSalvar,
}) => {
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
      {mostrarBotaoSalvar && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoCliclarEmSalvar}
          startIcon={<Icon>save</Icon>}
        >Salvar</Button>
      )}
      {mostrarBotaoApagar && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoCliclarEmApagar}
          startIcon={<Icon>delete</Icon>}
        >Apagar</Button>
      )}
      {mostrarBotaoNovo && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoCliclarEmNovo}
          startIcon={<Icon>add</Icon>}
        >{textoBotaoNovo}</Button>
      )}

      <Divider variant='middle' orientation='vertical' />

      {mostrarBotaoVoltar && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoCliclarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}
        >Voltar</Button>
      )}
    </Box>
  );
};