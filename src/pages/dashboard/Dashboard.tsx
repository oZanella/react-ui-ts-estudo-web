import { BarraDeFerramentas } from '../../shared/components';
import { LayoutBaseDaPagina } from '../../shared/layouts';


export const Dashboard = () => {

  return (
    <LayoutBaseDaPagina
      titulo='Página incial'
      barraDeFerramentas={(
        <BarraDeFerramentas />
      )}
    >
      Testando
    </LayoutBaseDaPagina>
  );
};  