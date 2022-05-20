import React from "react";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

export default function UIV4Showcase(){

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