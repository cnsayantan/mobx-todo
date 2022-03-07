import { makeObservable, observable, autorun, action } from "mobx"

class ObservableTodoStore {
  // addTodoValue: " "
  todos = [
    {
      id: 1,
      todo: "todo 1",
      // completed: "Yes",
    },
    {
      id: 2,
      todo: "todo 2",
      // completed: "Yes",
    },
    {
      id: 3,
      todo: "todo 3",
      // completed: "Yes",
    },
  ]
  name = "Sayantan"

  constructor() {
    makeObservable(this, {
      todos: observable,
      name: observable,
      addTodo: action,
      updateTodo: action,
      handleDelete: action,
    })
    autorun(() => console.log(this.report))
  }
  getTime() {
    let d = new Date()
    var n = d.getTime()
    return n
  }

  //method called from Todo component

  addTodo(value) {
    console.log(999, value)
    const todos = [...this.todos]
    todos.push({
      id: this.getTime(),
      todo: value,
      // completed: "",
      // isDone: false,
    })
  }

  handleDelete = (todoId) => {
    const todoIndexAtId = this.todos.findIndex((todo) => todo.id === todoId)
    if (todoIndexAtId > -1) {
      this.todos.splice(todoIndexAtId, 1)
    }
  }

  updateTodo(todoId, update) {
    const todoIndexAtId = this.todos.findIndex((todo) => todo.id === todoId)
    if (todoIndexAtId > -1 && update) {
      this.todos[todoIndexAtId] = update
    }
  }
}

export default ObservableTodoStore
