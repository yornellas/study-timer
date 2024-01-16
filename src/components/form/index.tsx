import React from 'react'
import Button from '../button'
import './styles.scss'

class Form extends React.Component {
  state = {
    task: '',
    time: '00:00'
  }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  render() {
    return (
      <form className='newTask' onSubmit={ this.addTask.bind(this) }>
        <div className='inputContainer'>
          <label htmlFor='task'>Adicione um novo estudo</label>
          <input
            type='text'
            name='task'
            id='task'
            placeholder='O que você quer estudar?'
            required
            value={ this.state.task }
            onChange={(event) =>
              this.setState(
                { ...this.state, task: event.target.value }
              )
            }
            />
        </div>
        <div className='inputContainer'>
          <label htmlFor='time'>Tempo</label>
          <input
            type='time'
            step='1'
            name='time'
            id='time'
            min='00:00:00'
            max='02:00:00'
            value={ this.state.time }
            onChange={(event) => 
              this.setState(
                { ...this.state, time: event.target.value }
            )}
          />
        </div>
        <Button 
          text="Adicionar"
        />
      </form>
    )
  }
}

export default Form