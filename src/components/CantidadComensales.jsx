import { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';

function CantidadComensales() {
  
  const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Cantidad de comensales</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="1" control={<Radio />} label="1" />
        <FormControlLabel value="2" control={<Radio />} label="2" />
        <FormControlLabel value="3" control={<Radio />} label="3" />
        <FormControlLabel value="4" control={<Radio />} label="4" />
        <FormControlLabel value="5" control={<Radio />} label="5" />
        <FormControlLabel value="6" control={<Radio />} label="6" />
        <FormControlLabel value="7" control={<Radio />} label="7" />
        <FormControlLabel value="8" control={<Radio />} label="8" />
        <FormControlLabel value="9" disabled control={<Radio />} label="9" />
        <FormControlLabel value="10" disabled control={<Radio />} label="10" />
      </RadioGroup>
    </FormControl>
  );
}

export default CantidadComensales