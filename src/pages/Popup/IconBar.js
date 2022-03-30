import React from 'react'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'

import RefreshIcon from '@mui/icons-material/Refresh'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings'

const [u_refresh, u_linkedIn,u_facebook,u_instagram,u_settings] = ['',
    'https://www.linkedin.com/company/partechnology/',
    'https://www.facebook.com/parpointofsale/',
    'https://www.instagram.com/partechnology/?hl=en',
    'http://codemarc.net/matrix/'
  ]

//handlers
const handleClick = (hurl, event) => { hurl === '' ? chrome.runtime.reload() : window.open(hurl) }
const refreshClick = (event) => { handleClick(u_refresh, event) }
const linkedInClick = (event) => { handleClick(u_linkedIn, event) }
const facebookClick = (event) => { handleClick(u_facebook, event) }
const instagramClick = (event) => {handleClick(u_instagram, event) }
const settingsClick = (event) => {handleClick(u_settings, event) }

export default function IconBar() {
  return (
    <span>
      <Stack direction="row" spacing={0}>
        <IconButton aria-label="refresh" onClick={refreshClick}><RefreshIcon /></IconButton>
        <IconButton aria-label="linkedin" onClick={linkedInClick}><LinkedInIcon /></IconButton>
        <IconButton aria-label="facebook" onClick={facebookClick}><FacebookIcon /></IconButton>
        <IconButton aria-lable="instagram" onClick={instagramClick}><InstagramIcon /></IconButton>
        <IconButton aria-lable="screensave" onClick={settingsClick}><DisplaySettingsIcon /></IconButton>
      </Stack>
    </span>
  )
}