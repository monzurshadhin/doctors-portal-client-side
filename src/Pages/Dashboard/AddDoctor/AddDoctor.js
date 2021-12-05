import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {
    const [name,setName] = useState('')
    const [email,setEmail] =useState('')
    const [image,setImage] =useState(null);
    const [success, setSuccess] = useState(false);
    const handleSubmit = e =>{
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        
        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                    console.log('doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
  return (
    <div>
      <h3>Add Doctor</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Name"
          sx={{ width: "50%" }}
          required
          onChange={e => setName(e.target.value)}
          variant="standard"
        />
        <br />
        <TextField
          id="standard-basic1"
          label="Email"
          sx={{ width: "50%" }}
          required
          onChange={e => setEmail(e.target.value)}
          variant="standard"
        />
        <br />
        <Input
          accept="image/*"
          onChange={e => setImage(e.target.files[0])}
          multiple 
          type="file"
        />
        <br />
        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default AddDoctor;
