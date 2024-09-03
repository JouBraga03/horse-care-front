import React from 'react';

import Typography from '@mui/material/Typography';

import Lista from '../../common/components/List';
import { useCavaloContext } from '../../common/context/Cavalo';
import FormularioCavalo from './components/FormularioCavalo';

import { colunasTabelaCavalo } from './components/utils/columns';

import Container from '../../common/components/Container';

interface Props {}

const Cavalo: React.FC<Props> = () => {
  const { cavalos, deleteCavalos } = useCavaloContext();

  const handleDelete = (indexItem: number) => {
    deleteCavalos(indexItem);
  };

  return (
    <Container>
      <Typography component="h1" variant="h3">
        Listagem de Caválos
      </Typography>

      <FormularioCavalo />

      <Lista
        colunas={colunasTabelaCavalo}
        itens={cavalos}
        onDelete={handleDelete}
      />
    </Container>
  );
};

export default Cavalo;
