import React from 'react'
import pak from '../../../package.json'
import IconBar from './IconBar'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} >
            <Button color="inherit" href="https://www.partech.com/" target="_new" title="pattern analysis recognition"><img src="parpie.png" className="imglogo" hspace="4"></img>
             <a target="_new" href="https://www.partech.com/partech">Tech</a></Button>
          </Box>
          <Box sx={{ flexGrow: 7 }} ></Box>
          <Box sx={{ flexGrow: 1 }} >
            {/* <Button color="inherit" href="#" target="_new">partech.com</Button>
            /
            <Button color="inherit" href="https://www.linkedin.com/company/partechnology/" target="_new">LinkedIn</Button> */}
          </Box>
          <Box>
            <Button color="inherit" href="#" target="_new">version {pak.version}</Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} >
            <IconBar />
          </Box>
        </Toolbar>
      </AppBar>
    </Box >

  )
}