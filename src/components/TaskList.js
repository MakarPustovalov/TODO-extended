import React from 'react';
import Task from './Task'
import add from '../assets/img/add.svg'

function TaskList(props) {
  return (
    <div className="tasklist">
      <h1 className="tasklist__header">Tasks for today</h1>

      <form>

        <input
        className="tasklist__input"
        type="text"
        onChange={props.inputChangeHandler}
        value={props.inputValue}
        placeholder="Enter task description"
        id="task-input"
        />

        <img src={add}
        alt="Add task"
        className="tasklist__add"
        type="submit"
        value="+"
        onClick={props.submitHandler}
        />

      </form>

      {props.item.tasks.map(item => {
        return <Task
        key={item.id}
        data={item}
        checkboxHandler={props.checkboxHandler}
        deleteHandler={props.deleteHandler}
        />
      })}

    </div>
  )
}

export default TaskList