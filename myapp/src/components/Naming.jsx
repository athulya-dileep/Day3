import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Naming = () => {
  var [x, setx] = useState()
  const inpt1 = () => {
      setx("React")
  }
  const inpt2 = () => {
    setx("Angular")
  }
  const inpt3 = () => {
    setx("Vue")
  }
  //use effect
  // useEffect(()=>{},[])
  useEffect(() => {
    inpt2()
  },[])
  return (
    <div>
      <Typography variant='h3'><em>Welcome {x} </em></Typography> <br /><br /><br />
          <Button variant="contained" color='primary' onClick={inpt1}>React</Button> &nbsp; &nbsp;
          <Button variant='contained' color='secondary' onClick={inpt2}>Angular</Button> &nbsp; &nbsp;
          <Button variant='contained' color='success' onClick={inpt3}>Vue</Button>
    </div>
  )
}

export default Naming
