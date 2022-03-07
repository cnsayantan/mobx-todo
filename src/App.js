import { Provider } from "mobx-react"

import TodoList from "./Components/TodoList/TodoList"
import ObservableTodoStore from "./Store/TodoStore"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"

const App = () => {
  const store = new ObservableTodoStore()
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList store={store} />
      </div>
    </Provider>
  )
}

export default App
