import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { red } from '@material-ui/core/colors'
import Chip from '@material-ui/core/Chip'
import { Divider } from '@material-ui/core'
import '../App.css'
import '../index.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderRadius: 8,
    border: '1px solid #DFDFDA',
    padding: 12
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
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
    fontWeight: 700
  },
  progress2: {
    fontSize: 14,
    fontWeight: 700
  },
  state: {
    margin: 0,
    padding: 4,
    borderRadius: 3,
    display: 'inline-block',
    backgroundColor: 'orangered',
    color: 'white',
    fontSize: 12,
    fontWeight: 700
  },
  chipDot: {
    width: '8px !important',
    height: '8px !important',
    backgroundColor: '#01CEAA',
    borderRadius: 20
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
      <p className={classes.progress1}>Progreso: {progress * 100}%</p>
      <Button variant='contained' color='primary'>
        Continuar
      </Button>
      <Divider light />
      {tags.map(tag => <Chip label={tag} avatar={<div className={classes.chipDot} />} />)}
      <span class='material-icons'>chat_bubble</span>
    </Paper>
  )
}
