import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDaPagina } from '../../shared/layouts';


export const Dashboard = () => {

  return (
    <LayoutBaseDaPagina
      titulo='Página incial'
      FerramentasDaListagem={(
        <FerramentasDaListagem
          mostrarInputBusca
          textoBotaoNovo='Nova'
        />
      )}
    >
      Testando
    </LayoutBaseDaPagina>
  );
};  