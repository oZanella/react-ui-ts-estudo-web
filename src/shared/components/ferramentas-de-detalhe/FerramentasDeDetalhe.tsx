import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useTheme, Theme, useMediaQuery } from '@mui/material';

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;

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

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,

  aoCliclarEmNovo,
  aoCliclarEmVoltar,
  aoCliclarEmApagar,
  aoCliclarEmSalvar,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  //const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md')); //não esta sendo usando 
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

      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoCliclarEmSalvar}
          startIcon={<Icon>save</Icon>}
        >
          <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            Salvar
          </Typography>
        </Button>
      )}

      {
        mostrarBotaoSalvarCarregando && (
          <Skeleton width={110} height={60} />
        )}

      {
        (mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
          <Button
            color='primary'
            disableElevation
            variant='outlined'
            onClick={aoCliclarEmApagar}
            startIcon={<Icon>delete</Icon>}
          >
            <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
              Apagar
            </Typography>
          </Button>
        )}

      {
        mostrarBotaoApagarCarregando && (
          <Skeleton width={110} height={60} />
        )}

      {
        (mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (
          <Button
            color='primary'
            disableElevation
            variant='outlined'
            onClick={aoCliclarEmNovo}
            startIcon={<Icon>add</Icon>}
          >
            <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
              {textoBotaoNovo}
            </Typography>
          </Button>
        )}

      {(mostrarBotaoNovoCarregando && !smDown) && (
        <Skeleton width={110} height={60} />
      )}

      {
        (mostrarBotaoVoltar &&
          (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar)  //se o botao voltar estiver true e todos os outros tambem, entao vai ser exibido o divier, caso contrario não
        ) && (
          <Divider variant='middle' orientation='vertical' />
        )}

      {
        (mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
          <Button
            color='primary'
            disableElevation
            variant='outlined'
            onClick={aoCliclarEmVoltar}
            startIcon={<Icon>arrow_back</Icon>}
          >
            <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
              Voltar
            </Typography>
          </Button>
        )}

      {
        mostrarBotaoVoltarCarregando && (
          <Skeleton width={110} height={60} />
        )}
    </Box >
  );
};