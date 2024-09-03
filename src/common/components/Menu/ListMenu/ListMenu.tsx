import React from 'react';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import HomeIcon from '@mui/icons-material/Home';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import GroupIcon from '@mui/icons-material/Group';
import MedicationIcon from '@mui/icons-material/Medication';

const ListMenu: React.FC = () => {
  const list = [
    { title: 'Home', path: '/', icon: <HomeIcon /> },
    { title: 'Cavalo', path: '/cavalo', icon: <BedroomBabyIcon /> },
    { title: 'Cliente', path: '/cliente', icon: <GroupIcon /> },
    { title: 'Materiais', path: '/materiais', icon: <MedicationIcon /> },
  ];

  return (
    <List>
      {list.map(({ title, path, icon }) => (
        <Link to={path} key={title}>
          <ListItem button key={title}>
            <ListItemIcon>{icon && icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default ListMenu;
