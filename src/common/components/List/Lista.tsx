import * as React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { ListItems, ListaHeaderItem, ListItemsInfo } from './styles';

import { ICavalo } from '../../interfaces/Cavalo';

interface iProps {
  colunas: string[];
  itens: ICavalo[];
  onDelete: (indexItem: number) => void;
}

const Lista: React.FC<iProps> = ({ colunas, itens, onDelete }) => {
  return (
    <Box style={{ width: '100%' }}>
      <Grid container style={{ width: '100%' }}>
        <Grid item xs={12} md={10} lg={12}>
          <ListItems itensCount={colunas?.length}>
            {colunas?.map((coluna) => (
              <ListaHeaderItem key={coluna}>{coluna}</ListaHeaderItem>
            ))}
          </ListItems>

          <List>
            {itens?.map((item) => (
              <ListItems itensCount={colunas?.length}>
                <ListItemsInfo>
                  <Typography component="span">{item.id}</Typography>
                </ListItemsInfo>

                <ListItemsInfo>
                  <Typography component="span">{item.nome}</Typography>
                </ListItemsInfo>

                <ListItemsInfo>
                  <Typography component="span">{item.idade}</Typography>
                </ListItemsInfo>

                <ListItemsInfo>
                  <Typography component="span">{item.raca}</Typography>
                </ListItemsInfo>

                <ListItemsInfo>
                  <Typography component="span">{item.cor}</Typography>
                </ListItemsInfo>

                <ListItemsInfo>
                  <IconButton
                    aria-label="delete"
                    onClick={() => onDelete(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>

                  <IconButton aria-label="delete">
                    <EditIcon />
                  </IconButton>
                </ListItemsInfo>
              </ListItems>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Lista;
