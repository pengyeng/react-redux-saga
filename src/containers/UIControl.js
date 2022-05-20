import React from "react";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function UIV4Showcase(){

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return(
    <div>
    <Typography variant="h3" component="h4">UI Version 4 Showcase</Typography>
     
      <table>
        <tr>
        <td>
        <Box sx={{ minWidth: 120 }}>    
        <FormControl fullWidth> 
        <InputLabel id="select-label">Manufacturer</InputLabel>
        <Select labelId="select-label" labelvalue="NONE">
          <MenuItem value={"BMW"}>BMW</MenuItem>
          <MenuItem value={"PEUGEOT"}>Peugeot</MenuItem>
          <MenuItem value={"TOYOTA"}>Toyota</MenuItem>
        </Select>
        </FormControl>    
        </Box>
        
        </td>
        <td>&nbsp;</td>
        <td>
        <TextField label="Model"/><br></br>
        </td>
        <td>
        </td>
        </tr> 
      </table> 
    </div>
  );
}