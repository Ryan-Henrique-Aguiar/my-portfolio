import { AppBar, MenuItem, styled, Toolbar } from '@mui/material'
import { useState } from 'react'


const App = () => {
  const [] = useState(0)

  const Styledtoobar = styled(Toolbar)(({}) => ({
        display:"flex",
        justifyContent:"space-evenly"
        }));

  return (
    <>
      
      <AppBar position="absolute">
        <Styledtoobar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projects</MenuItem>
        </Styledtoobar>
      </AppBar>
      
    </>
  )
}

export default App
