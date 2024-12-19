import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  var [counts, setCounts] = useState(0)
  const plushandler = () => {
    setCounts(counts + 1)
  }
  const minushandler = () => {
    setCounts(counts - 1)
  }
  return (
    <div>
      <p><h2>Counter: {counts}</h2></p>
      <Button variant='contained' onClick={plushandler}>Plus</Button> &nbsp;
      <Button variant='contained' onClick={minushandler}>Minus</Button>
    </div>
  )
}

export default Counter
