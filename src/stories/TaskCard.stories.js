import React from 'react'
import TaskCard from '../components/TaskCard'
import '../index.css'
import '../App.css'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const TaskCardStories = {
  title: 'TaskCard',
  component: TaskCard
}

const taskCardLecturaStates = {
  NUEVA: 'NUEVA',
  COMENZADA: 'COMENZADA',
  DEMORADA: 'DEMORADA',
  COMPLETADA: 'COMPLETADA'
}

const Template = (args) => <TaskCard {...args} />

const TaskCardLecturaProps = {
  subtitle: 'LECTURA',
  title: 'Cuentos para aprender ortografía',
  dueDate: format(new Date(2020, 3, 15), "dd 'de' MMMM", {
    locale: es
  }),
  progress: 0,
  state: taskCardLecturaStates.NUEVA,
  tags: ['Lengua', 'Coso']
}

export const TaskCardLecturaNormal = Template.bind({})
TaskCardLecturaNormal.args = {
  ...TaskCardLecturaProps,
  progress: 0.25,
  state: taskCardLecturaStates.COMENZADA
}

export const TaskCardLecturaNueva = Template.bind({})
TaskCardLecturaNueva.args = {
  ...TaskCardLecturaProps
}

export const TaskCardLecturaDemorada = Template.bind({})
TaskCardLecturaDemorada.args = {
  ...TaskCardLecturaProps,
  progress: 0.25,
  state: taskCardLecturaStates.DEMORADA
}

export const TaskCardLecturaCompletada = Template.bind({})
TaskCardLecturaCompletada.args = {
  ...TaskCardLecturaProps,
  progress: 1,
  state: taskCardLecturaStates.COMPLETADA
}

export default TaskCardStories
