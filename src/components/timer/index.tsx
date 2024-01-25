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

  function countdown(number: number = 0) {
    setTimeout(() => {
      if (number <= 0) return

      setTime(number - 1)
      return countdown(number - 1)
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
