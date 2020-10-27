import React, { Component } from 'react'
import TaskList from './components/TaskList'

class App extends Component {

  constructor () {
    super();
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks")) ?
      JSON.parse(localStorage.getItem("tasks")):
      [],
      inputValue: '',
    }
    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  setLocalStorage () {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
  }

  checkboxHandler (event) {
    this.setState(state => {
      let currentTask = this.getTaskById(event.target.name);
      currentTask = {
        ...currentTask,
        checked: !currentTask.checked
      }
      const newTasks = state.tasks.map(item => {
        return item.id === currentTask.id ? currentTask : item
      })
      return {...state, tasks: newTasks}
    })
  }

  getTaskById (id) {
    const currentTask = this.state.tasks.filter(task => {
      return task.id === id
    })
    return currentTask[0]
  }

  inputChangeHandler (event) {
    this.setState(prevstate => {
      return {
        ...prevstate,
        inputValue: event.target.value
      }
    })
  }

  submitHandler (event) {
    this.setState(prevState => {
      const newTask = {
        description: prevState.inputValue,
        checked: false,
        id: `idse-${(+new Date).toString(16)}`,
      }
      const newTasks = [
        ...prevState.tasks,
        newTask
      ]
      return {
        ...prevState,
        tasks: newTasks
      }
    })
    event.preventDefault();
    document.getElementById('task-input').value = '';
  }

  deleteHandler (event) {
    this.setState(prevState => {
      let currentTask = this.getTaskById(event.target.name);
      let newTasks = prevState.tasks.filter(task => {
        return task !== currentTask
      })
      return {
        ...prevState,
        tasks: newTasks
      }
    })
  }

  render () {
    this.setLocalStorage();
    return (
      <>
        <TaskList
        item={this.state}
        checkboxHandler={this.checkboxHandler}
        inputChangeHandler={this.inputChangeHandler}
        submitHandler={this.submitHandler}
        deleteHandler={this.deleteHandler}
        />
      </>
    );

  }

}

export default App;