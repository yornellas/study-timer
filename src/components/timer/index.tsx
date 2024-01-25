import { useEffect, useState } from 'react'
import { Task } from '../../interfaces'
import Button from '../button'
import { Clock } from './clock'
import './styles.scss'
import { timeToSeconds } from '../../utils/time'

interface Props {
  selectedTask: Task | undefined
  finalizeTask: () => void
}

export function Timer({ selectedTask, finalizeTask }: Props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selectedTask?.time) setTime(timeToSeconds(selectedTask.time))
  }, [selectedTask])

  function countdown(number: number = 0) {
    setTimeout(() => {
      if (number > 0) {
        setTime(number - 1)
        return countdown(number - 1)
      }

      finalizeTask()
    }, 1000)
  }

  return (
    <div className="timer">
      <p className="title">Escolha um card e inicie o cronômetro</p>
      <div className="clock-container">
        <Clock time={time} />
      </div>
      <Button text="Começar" onClick={() => countdown(time)} />
    </div>
  )
}
