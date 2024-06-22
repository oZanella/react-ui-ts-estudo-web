import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDaPagina } from '../../shared/layouts';


export const Dashboard = () => {

  return (
    <LayoutBaseDaPagina
      titulo='Página incial'
      FerramentasDaListagem={(
        <FerramentasDeDetalhe />
      )}
    >
      Testando
    </LayoutBaseDaPagina>
  );
};  