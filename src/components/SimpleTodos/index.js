import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, textInput: ''}

  onChangeInputText = event => {
    this.setState({textInput: event.target.value})
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredTodoList = todosList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todosList: filteredTodoList})
  }

  updateTodoItemTitle = (id, newTitle) => {
    const {todosList} = this.state
    const updatedList = todosList.map(eachItem => {
      if (eachItem.id === id) {
        const updatedTodo = {...eachItem, title: newTitle}
        return updatedTodo
      }
      return eachItem
    })

    this.setState({todosList: updatedList})
  }

  onSubmitForm = () => {
    const {textInput} = this.state
    const newTodo = {
      id: uuidv4(),
      title: textInput,
    }

    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo],
      textInput: '',
    }))
  }

  render() {
    const {todosList, textInput} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <form className="input-container">
            <input
              type="text"
              className="input-element"
              placeholder="Enter Text Here"
              onChange={this.onChangeInputText}
              value={textInput}
            />
            <button
              type="button"
              className="add-button"
              onClick={this.onSubmitForm}
            >
              Add
            </button>
          </form>
          <ul className="list-container">
            {todosList.map(eachTodo => (
              <TodoItem
                todoDetails={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.deleteTodo}
                updateTodoItemTitle={this.updateTodoItemTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
