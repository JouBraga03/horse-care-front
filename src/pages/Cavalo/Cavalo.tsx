import React from 'react';

import { useCavaloContext } from '../../common/context/Cavalo';
import FormularioCavalo from './components/FormularioCavalo';

import { List } from '@modules/horse'

interface Props {}

const Cavalo: React.FC<Props> = () => {
  const { cavalos, deleteCavalos } = useCavaloContext();

  const handleDelete = (indexItem: number) => {
    deleteCavalos(indexItem); 
  };

  return (
   <>
    <h2 className='font-bold text-2xl text-gray-300'> Cavalos </h2>

    <List />
   </>
  );
};

export default Cavalo;
