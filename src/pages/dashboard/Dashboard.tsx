import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';


export const Dashboard = () => {

  return (
    <LayoutBaseDePagina
      titulo='Página incial'
      barraDeFerramentas={(
        <FerramentasDeDetalhe />
      )}
    >
      Em desenvolvimento...
    </LayoutBaseDePagina>
  );
};  