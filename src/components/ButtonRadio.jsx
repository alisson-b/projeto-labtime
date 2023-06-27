import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './ButtonRadio.css'

const ButtonRadio = () => {
  return (
    <FormControl>
      <FormLabel className='handle-filtro' id="demo-row-radio-buttons-group-label">Filtrar por:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onChance={() => setButtonRa(e.target.value)} value="nome-social" control={<Radio />} label="Nome Social" />
        <FormControlLabel onChance={() => setButtonRa(e.target.value)} value="nome-completo" control={<Radio />} label="Nome Completo" />
        <FormControlLabel onChance={() => setButtonRa(e.target.value)} value="email" control={<Radio />} label="E-mail" />
      </RadioGroup>
    </FormControl>
  );
}


export default ButtonRadio;