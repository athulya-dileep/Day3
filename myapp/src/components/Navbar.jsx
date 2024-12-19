import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h5'>myapp</Typography> &nbsp; &nbsp; &nbsp;
                  <Link to='/login'>
                  <Button variant='contained'>Login</Button> 
                  </Link> &nbsp; &nbsp; &nbsp;
                  <Link to='/signup'>
                  <Button variant='contained'>Sign up</Button>
                  </Link> &nbsp; &nbsp; &nbsp;
                  <Link to='/state'>
                  <Button variant='contained'>State</Button>
                  </Link> &nbsp; &nbsp; &nbsp;
                  <Link to='/counter'>
                  <Button variant='contained'>Counter</Button>
                  </Link> &nbsp; &nbsp; &nbsp;
                  <Link to='/naming'>
                  <Button variant='contained'>Naming</Button>
                  </Link> &nbsp; &nbsp; &nbsp;
                  <Link to='/api'> 
                  <Button variant='contained'>Api</Button>
                  </Link> &nbsp; &nbsp; &nbsp;
                  <Link to='/pokemon'> 
                  <Button variant='contained'>Pokemon</Button>
                  </Link> &nbsp; &nbsp; &nbsp;
              </Toolbar>
      </AppBar>
      <br /><br /><br />
    </div>
  )
}

export default Navbar
