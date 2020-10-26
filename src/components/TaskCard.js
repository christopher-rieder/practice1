import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import { Box, Divider } from '@material-ui/core'
import '../App.css'
import '../index.css'

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    width: 335,
    borderRadius: theme.spacing(1),
    border: '1px solid #DFDFDA',
    padding: theme.spacing(1.5)
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 700
  },
  title: {
    fontSize: 16,
    fontWeight: 700
  },
  dueDate1: {
    fontSize: 14,
    fontWeight: 400
  },
  dueDate2: {
    fontSize: 14,
    fontWeight: 700
  },
  progress1: {
    fontSize: 14,
    fontWeight: 400,
    color: '#6D7878'
  },
  progress2: {
    color: 'black',
    fontSize: 14,
    fontWeight: 700
  },
  state: {
    margin: theme.spacing(0),
    padding: theme.spacing(0.5),
    borderRadius: 3,
    display: 'inline-block',
    backgroundColor: 'orangered',
    color: 'white',
    fontSize: 12,
    fontWeight: 700
  },
  chipRoot: {
    height: 24,
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    border: '1px solid #DFDFDA',
    '&:active': {
      boxShadow: 'none'
    },
    '&::before': {
      content: '""',
      width: 8,
      height: 8,
      marginLeft: 8,
      marginRight: -4,
      backgroundColor: '#01CEAA',
      borderRadius: 20
    }
  },
  chipLabel: {
    fontSize: 12,
    fontWeight: 700,
    paddingLeft: 8,
    paddingRight: 8
  },
  chipDot: {
  }
}))

export default function TaskCard ({ subtitle, title, dueDate, progress, state, tags }) {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <p className={classes.subtitle}>{subtitle}</p>
      <p className={classes.title}>{title}</p>
      <p className={classes.state}>{state}</p>
      <p className={classes.dueDate1}>
        Fecha de Entrega: <span className={classes.dueDate2}>{dueDate}</span>
      </p>
      <p className={classes.progress1}>
        Progreso: <span className={classes.progress2}>{progress * 100}%
        </span>
      </p>
      <Button variant='contained' color='primary'>
        Continuar
      </Button>
      <Divider light />
      <TaskCardChips tags={tags} />
    </Paper>
  )
}

function TaskCardChips ({ tags }) {
  const classes = useStyles()
  const handleClick = tag => _event => {
    // stub implement method
    console.log('TaskCardChips -> _event', _event)
  }
  return (
    <Box marginY={1} display='flex' alignItems='center'>
      <Box display='grid' gridAutoFlow='column' gridColumnGap='8px'>
        {tags.map(tag => <Chip onClick={handleClick(tag)} classes={{ root: classes.chipRoot, label: classes.chipLabel }} label={tag} />)}
      </Box>
      <Box marginLeft='auto'>
        <span class='material-icons'>chat_bubble</span>
      </Box>
    </Box>
  )
}
