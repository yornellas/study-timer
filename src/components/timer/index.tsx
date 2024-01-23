import { useEffect, useState } from 'react'
import { Task } from '../../interfaces'
import Button from '../button'
import { Clock } from './clock'
import './styles.scss'
import { timeToSeconds } from '../../utils/time'

interface Props {
  selectedTask: Task | undefined
}

export function Timer({ selectedTask }: Props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selectedTask?.time) setTime(timeToSeconds(selectedTask.time))
  }, [selectedTask])

  return (
    <div className='timer'>
      <p className='title'>
        Escolha um card e inicie o cronômetro
      </p>
      <div className='clock-container'>
        <Clock />
      </div>
      <Button text='Começar' />
    </div>
  )
}
