import React from 'react';
import crossSvg from '../assets/img/cross.svg'

function Task (props) {
  return (
    <>
      <div className="task">

        <form className="task__inner">

          <input
            type="checkbox"
            name={props.data.id}
            checked={props.data.checked}
            onChange={props.checkboxHandler}
          /> <span></span>

          <label
            className={!props.data.checked ? 'task__text' : 'task__text checked'}
          >
            {props.data.description}
          </label>

          <img
          src={crossSvg}
          alt="Delete"
          className="task__delete"
          name={props.data.id}
          onClick={props.deleteHandler}
          />

        </form>

      </div>
    </>
  )
}

export default Task