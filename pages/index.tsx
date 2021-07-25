import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';

const introRows = [
  "Sorry I can't come",
  "Please forgive my abscense",
  "This is going to sound crazy but",
  "Get this:",
  "I can't go because",
  "I know you're going to hate me but",
  "I was minding my own business and boom!",
  "I feel terrible but",
  "I regrettfully cannot attend,",
  "This is going to sound like an excuse but",
]

const scapegoatRows = [
  "my nephew",
  "the ghost of Hitler",
  "the Pope",
  "my ex",
  "a high school marching band",
  "Dan Rather",
  "a sad clown",
  "the kid from Air Bud",
  "a professional cricket team",
  "my Tinder date"
]

const delayRows = [
  "just shit the bed",
  "died in front of me",
  "won't stop telling me knock knock jokes",
  "is having a nervous breakdown",
  "gave me syphilis",
  "poured lemonage in my gas tank",
  "stabbed me",
  "found my box of human teeth",
  "stole my bicycle",
  "posted my nudes on Instagram"
]

export default function Index() {
  const [selectedIntro, setSelectedIntro] = React.useState('')
  const [selectedScapegoat, setSelectedScapegoat] = React.useState('')
  const [selectedDelay, setSelectedDelay] = React.useState('')
  
  const handleIntroClick = (name: string) => {
    setSelectedIntro(name)
  }

  const handleScapegoatClick = (name: string) => {
    setSelectedScapegoat(name)
  }

  const handleDelayClick = (name: string) => {
    setSelectedDelay(name)
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Canceling Plans Excuse Generator
        </Typography>
        <Grid container>
          <Grid item>
          <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="introTitle"
          component="div"
        >
          Choose an Intro
        </Typography>
        <TableContainer component={Paper} style={{backgroundColor: 'rgb(202, 73, 54)'}}>
      <Table aria-label="intros">
        <TableBody>
          {introRows.map((row) => (
            <TableRow
            hover
                      onClick={() => handleIntroClick(row)}
              key={row}
              selected={selectedIntro === row}
              style={selectedIntro === row ? { border: '2px solid black'}: {}}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{color: 'white'}}>
                {row}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Grid>
          <Grid item>
            
          <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="scapegoatTitle"
          component="div"
        >
          Choose a Scapegoat
        </Typography>
        <TableContainer component={Paper} style={{backgroundColor: 'rgb(218, 169, 51)'}}>
      <Table aria-label="scapegoats">
        <TableBody>
          {scapegoatRows.map((row) => (
            <TableRow
            hover
                      onClick={() => handleScapegoatClick(row)}
              key={row}
              selected={selectedScapegoat === row}
              style={selectedScapegoat === row ? { border: '2px solid black'}: {}}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{color: 'white'}}>
                {row}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Grid>
          <Grid item>
          <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="delayTitle"
          component="div"
        >
          Choose a Delay
        </Typography>
        <TableContainer component={Paper} style={{backgroundColor: 'rgb(13, 140, 173)'}}>
      <Table aria-label="delays">
        <TableBody>
          {delayRows.map((row) => (
            <TableRow
            hover
                      onClick={() => handleDelayClick(row)}
              key={row}
              selected={selectedDelay === row}
              style={selectedDelay === row ? { border: '2px solid black'}: {}}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{color: 'white'}}>
                {row}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Grid>
        </Grid>
        <Typography variant="h4" component="h2" gutterBottom>{selectedIntro} {selectedScapegoat} {selectedDelay}</Typography>
      </Box>
    </Container>
  );
}
