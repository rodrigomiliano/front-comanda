import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Turnos</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="12:00HS" control={<Radio />} label="12:00HS" />
        <FormControlLabel value="14:00HS" control={<Radio />} label="14:00HS" />
        <FormControlLabel value="20:00HS" control={<Radio />} label="20:00HS" />
        <FormControlLabel value="22:00HS" disabled control={<Radio />} label="22:00HS" />
      </RadioGroup>
    </FormControl>
  );
}