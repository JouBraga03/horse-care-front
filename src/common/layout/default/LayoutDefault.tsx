import React from 'react';

import Menu from '../../components/Menu';

interface Props {
  children: React.ReactNode;
}

const LayoutDefault: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Menu children={children} />
    </>
  );
};

export default LayoutDefault;
