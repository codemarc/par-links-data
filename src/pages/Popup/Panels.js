import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link';

import { default as data } from './Data'

const getTitle = (item) => (item.hasOwnProperty('href')) ? <Link title={item.title} href={item.href} underline="hover" target="_new">{item.section}</Link> : item.section

const getItemLink = (o, ndx) => (
    <dd key={ndx}>
      {
      o.name === '' ? (<br />) : (
          <span>
          {o.label === '-' ? (<hr />) : o.label}
            <a href={o.href} title={o.hint} target="_new">{o.name}</a>
            {o.label2}
            <a href={o.href2} title={o.hint2} target="_new">{o.name2}</a>
            {o.label3}
            <a href={o.href3} title={o.hint3} target="_new">{o.name3}</a>
            {o.label4}
            <a href={o.href4} title={o.hint4} target="_new">{o.name4}</a>
          </span>
        )
      }
    </dd>
)

const getBody = (item) => (<dl className="sitelinks">{item.links.map(getItemLink)}</dl>)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function Panels() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {data.map((o, ndx) => (
          <Grid item xs={3} key={ndx}>
            <Item>
              <Card>
                <CardHeader title={getTitle(o)} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {getBody(o)}
                  </Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
