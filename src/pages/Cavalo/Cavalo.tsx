import React from 'react';

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
   <>
    <h2> Caiu do cavalo </h2>
   </>
  );
};

export default Cavalo;
