import { useState } from 'react';

import { Dialog,DialogTitle,DialogContent,DialogActions } from '@mui/material';
import { Box,Fab,Button,TextField,Rating } from '@mui/material';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';


function Editer() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab variant="extended" color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon sx={{ mr: 1 }}/>
          Add
        </Fab>
        <Fab variant="extended">
          <SystemUpdateAltIcon sx={{ mr: 1 }} />
          import
        </Fab>
        <Fab variant="extended">
          <ShareIcon sx={{ mr: 1 }} />
          Export
        </Fab>
        <Fab disabled aria-label="like">
          <FavoriteIcon />
        </Fab>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>新規記録</DialogTitle>
        <DialogContent sx={{display:'flex', alignItems:'center', justifyContent:'space-around', flexDirection:'column', m:4}}>
            <TextField
                id="add_shop"
                label="店名"
                sx={{m:2}}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker label="Basic date picker" />
            </LocalizationProvider>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{m:4}} />
        </DialogContent>
        <DialogActions>
            <Button>保存</Button>
            <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Editer;
