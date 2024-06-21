import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface IFerramentasDaListagemProps {
  textoDaBusca?: string; //? não deixa ser obrigatório o preenchimento
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicaremNovo?: () => void;
}
export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = '',
  aoMudarTextoDeBusca,
  mostrarInputBusca = false,
  aoClicaremNovo,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
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
      {mostrarInputBusca && (
        <TextField
          size='small'     //fazendo com que o componente fique se adaptantdo paranao deixar nada fixo causando erros 
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
          placeholder='Pesquisar...'
        />
      )}

      <Box flex={1} display='flex' justifyContent='end'>
        {mostrarBotaoNovo && (      //usando {()} com o código dentro e && apenas se for true
          <Button
            color='primary'
            disableElevation
            variant='contained'
            onClick={aoClicaremNovo}
            endIcon={<Icon>add</Icon>}
          >{textoBotaoNovo}</Button>
        )}
      </Box>
    </Box>                //definindo o button na lateral direita
  );

};