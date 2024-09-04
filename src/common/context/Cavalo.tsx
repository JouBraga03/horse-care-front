import { createContext, useContext, useState } from 'react';

import { ICavalo, ICavaloContext } from '../interfaces/Cavalo';

export const CavaloContext = createContext<ICavaloContext>(
  {} as ICavaloContext
);

CavaloContext.displayName = 'CavaloContext';

export const CavaloProvider = (children: any ) => {
  const [cavalos, setCavalos] = useState<ICavalo[]>([]);

  const handleSetCavalos = (cavalo: ICavalo) => {
    setCavalos([...cavalos, cavalo]);
  };

  const deleteCavalos = (indexItem: number) => {
    const filteredCavalos = cavalos.filter(({ id }) => indexItem !== id);
    return setCavalos(filteredCavalos);
  };

  return (
    <CavaloContext.Provider
      value={{ cavalos, handleSetCavalos, deleteCavalos }}
    >
      {children}
    </CavaloContext.Provider>
  );
};

export const useCavaloContext = () => {
  return useContext(CavaloContext);
};
