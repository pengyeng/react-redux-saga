import React from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';


export default function UIV5Showcase(){


    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState('active');
    const [open, setOpen] = React.useState(false);
    
  
    const handleDialogOpen = () => {
      setOpen(true);
    };
  
    const handleDialogClose = (value) => {
      setOpen(false);
    //  setSelectedValue(value);
    };
  
    const handleRadioChange = (event) => {
      setValue(event.target.value);
    };
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return(
      <div>
      <Typography variant="h3" component="h4">UI Version 5 Showcase</Typography>
       
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
          <TextField label="Model"  multiline   maxRows={7} /><br></br>
          </td>
          </tr>
          <tr>
          <td>
          <RadioGroup aria-label="Status" name="status" value={value} onChange={handleRadioChange}>
              <FormControlLabel value="active" control={<Radio />} label="Active" />
              <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
          </RadioGroup>          
          </td>
          <td></td>
          <td></td>
          </tr> 
          <tr>
          <td>
          <Button variant="contained"  onClick={handleDialogOpen} >Open Dialog Box</Button>
          </td>  
          <td></td>
          <td></td>
          </tr>
        </table>
        <Dialog onClose={handleDialogClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">My Dialog Box</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you want to proceed?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              No
            </Button>
            <Button onClick={handleDialogClose} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>        
        </Dialog> 
      </div>
    );
  }