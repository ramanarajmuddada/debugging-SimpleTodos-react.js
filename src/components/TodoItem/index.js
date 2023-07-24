import './index.css'

const TodoItem = props => {
  const {todosList, deleteTodo} = props
  const {title, id} = todosList

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="each-list">
      <p className="head">{title}</p>
      <button className="btn-sty" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
