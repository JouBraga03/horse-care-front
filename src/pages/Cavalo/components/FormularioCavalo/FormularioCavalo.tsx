import React, { useState } from 'react';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useCavaloContext } from '../../../../common/context/Cavalo';
import { ICavalo } from '../../../../common/interfaces/Cavalo';

const FormularioCavalo: React.FC = () => {
  const [formCavalo, setFormCavalo] = useState({} as ICavalo);
  const { handleSetCavalos, cavalos } = useCavaloContext();

  const handleClick = () => {
    handleSetCavalos({ ...formCavalo, id: cavalos.length + 1 });

    resetForm();
  };

  const resetForm = () => {
    setFormCavalo({
      id: 0,
      nome: '',
      idade: 0,
      cor: '',
      raca: '',
    });
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{ width: '100%' }}
    >
      <TextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        value={formCavalo.nome}
        onChange={(e) => setFormCavalo({ ...formCavalo, nome: e.target.value })}
      />

      <TextField
        id="outlined-basic"
        type="number"
        label="Idade"
        variant="outlined"
        value={formCavalo.idade}
        onChange={(e) =>
          setFormCavalo({ ...formCavalo, idade: parseInt(e.target.value) })
        }
      />

      <TextField
        id="outlined-basic"
        label="Cor"
        variant="outlined"
        value={formCavalo.cor}
        onChange={(e) => setFormCavalo({ ...formCavalo, cor: e.target.value })}
      />

      <TextField
        id="outlined-basic"
        label="Raça"
        variant="outlined"
        value={formCavalo.raca}
        onChange={(e) => setFormCavalo({ ...formCavalo, raca: e.target.value })}
      />

      <Button variant="contained" onClick={handleClick}>
        Salvar
      </Button>
    </Box>
  );
};

export default FormularioCavalo;
