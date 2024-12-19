import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname, setfname] = useState("Athulya")
    var [lname, setlname] = useState()
    const handleinput = (e) => {
        console.log(e.target.value)
        setfname(e.target.value)
    }
    const handle = () => {
        console.log("Button clicked") 
        setlname(fname)
    }
    
  return (
    <div>
          <Typography variant='h6'>Welcome {lname}</Typography>
          <br /><br />
          <TextField variant='outlined' label="Enter name" onChange={handleinput} /> <br /><br />
          <Button variant="contained" onClick={handle}>Submit</Button> 
    </div>
  )
}

export default StateBasics
