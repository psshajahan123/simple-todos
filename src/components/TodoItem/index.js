// Write your code here
import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, updateTodoItemTitle} = props
  const {id, title} = todoDetails
  const [booleanValue, setBoolean] = useState(true)
  const [newTitle, setTitle] = useState('')

  const onChangeFormInput = event => {
    setTitle(event.target.value)
  }
  const onDelete = () => {
    deleteTodo(id)
  }
  const onClickEditBtn = () => {
    setBoolean(!booleanValue)
  }

  const onClickSaveBtn = () => {
    setBoolean(!booleanValue)
    if (newTitle.length === 0) {
      return updateTodoItemTitle(id, title)
    }
    return updateTodoItemTitle(id, newTitle)
  }

  return (
    <li className="list-card-container">
      {booleanValue ? (
        <p className="list-text">{title}</p>
      ) : (
        <input
          type="text"
          className="text-input-field"
          defaultValue={title}
          onChange={onChangeFormInput}
        />
      )}
      <div>
        {booleanValue ? (
          <button
            type="button"
            className="edit-button"
            onClick={onClickEditBtn}
          >
            Edit
          </button>
        ) : (
          <button
            type="button"
            className="save-button"
            onClick={onClickSaveBtn}
          >
            Save
          </button>
        )}
        <button type="button" className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
