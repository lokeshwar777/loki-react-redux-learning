import Todo from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {
  return (
    <>
      <h1>Redux Todo Management</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
