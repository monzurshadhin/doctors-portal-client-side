import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking,handleBookingClose,booking,date,setBookingSuccess}) => {
    const {name,time,space,price} = booking;
    const {user} = useAuth();
    const initialInfo = {patientName:user.displayName,email:user.email,phone:''}
    const[ bookingInfo,setBookingInfo] = useState(initialInfo)
   

    
   
    const handleOnBlur = (e) =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...bookingInfo};
      newInfo[field] = value;
      setBookingInfo(newInfo)
    }

    const handleBookSubmit = (e) =>{
      const appointment = {...bookingInfo,time,price,serviceName:name,date:date.toLocaleDateString()}
      // console.log(appointment);
      fetch('http://localhost:5000/appointments',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(appointment)

      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          setBookingSuccess(true)
          handleBookingClose();
        }
      })
      e.preventDefault();
      handleBookingClose();
  }

  
    return (
        <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
         <form onSubmit={handleBookSubmit}>
         <TextField
          disabled
          sx={{width:'100%',m:1}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
         <TextField
          
          sx={{width:'100%',m:1}}
          id="outlined-size-small"
          placeholder="your name"
          size="small"
          name="patientName"
          onBlur={handleOnBlur}
          defaultValue={user.displayName}
        />
         <TextField
          
          sx={{width:'100%',m:1}}
          id="outlined-size-small"
        //   defaultValue="your email"
          placeholder="your email"
          size="small"
          name="email"
          onBlur={handleOnBlur}
          defaultValue={user.email}
        />
         <TextField
          
          sx={{width:'100%',m:1}}
          id="outlined-size-small"
          placeholder="phone number"
          size="small"
          name="phone"
          onBlur={handleOnBlur}
        />
         <TextField
          disabled
          sx={{width:'100%',m:1}}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
          
        />
        <Button type="submit" variant="contained">Submit</Button>
         </form>

        </Box>
      </Modal>
    );
};

export default BookingModal;