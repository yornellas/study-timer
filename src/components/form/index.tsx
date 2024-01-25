import React from 'react'
import Button from '../button'
import './styles.scss'
import { Task } from '../../interfaces'
import { v4 as uuidv4 } from 'uuid'

class Form extends React.Component<{
  setTask: React.Dispatch<React.SetStateAction<Task[]>>
}> {
  state: Task = {
    name: '',
    time: '00:00',
    selected: false,
    completed: false,
    id: ''
  }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    this.props.setTask((oldTasks) => [
      ...oldTasks,
      {
        ...this.state,
        selected: false,
        completed: false,
        id: uuidv4()
      },
    ])

    this.setState({
      name: '',
      time: '00:00',
    })
  }

  render() {
    return (
      <form className="newTask" onSubmit={this.addTask.bind(this)}>
        <div className="inputContainer">
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar?"
            required
            value={this.state.name}
            onChange={(event) =>
              this.setState({ ...this.state, name: event.target.value })
            }
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:00:00"
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
          />
        </div>
        <Button text="Adicionar" type="submit" />
      </form>
    )
  }
}

export default Form
