import styled from 'styled-components';

interface IListItems {
  itensCount?: Number;
}

export const ListItems = styled.div<IListItems>`
  display: grid;
  grid-template-columns: ${(props) =>
    props?.itensCount ? 'repeat(' + props.itensCount + ', 1fr)' : ''};
`;

export const ListaHeaderItem = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const ListItemsInfo = styled.div`
  font-size: 14px;
`;
