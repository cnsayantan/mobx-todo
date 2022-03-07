import React, { Component } from "react"
import { inject, observer } from "mobx-react"

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultValue: "",
      todoValue: this.props.store.todos,
      newTodo: "",
    }
    console.log(123, this.state.todoValue)
  }
  handleSubmit = (e) => {
    console.log(777, e.target)
    e.preventDefault()

    this.props.store.addTodo(this.state.todoValue.push(this.state.newTodo))
    this.clearInput()
  }
  handleInput = (e) => {
    this.setState({ newTodo: e.target.value })
    // console.log(777, this.state.todoValue)
  }
  clearInput = () => {
    //Clear existing value in input
    document.getElementById("todoValue").todoValue = ""

    //Updating local component state
    this.setState({ todoValue: "" })
  }

  render() {
    console.log(888, this.props.store.todo)
    return (
      <>
        <div>
          <form>
            <input
              type="text"
              placeholder="Enter task"
              id="todoValue"
              value={this.defaultValue}
              onChange={this.handleInput}
            />
            <button onSubmit={this.handleSubmit}>Add Todo</button>
          </form>
          <p>{this.props.store.name}</p>
        </div>
        <table className="table">
          <tbody>
            {this.props.store.todos?.map((todo, index) => (
              <tr key={todo.id}>
                <td style={{ width: 10 }} className="text-center">
                  {todo.id}
                </td>
                <td>{todo.todo}</td>
                <td>{todo.completed}</td>

                <td style={{ width: 100 }} className="text-center">
                  <button
                    onClick={() => this.props.store.handleDelete(todo.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}

export default inject("store")(observer(TodoList))
