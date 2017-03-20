import React from 'react'
import Footer from './footer'
import AddTodo from '../../containers/todo-app/add-todo'
import VisibleTodoList from '../../containers/todo-app/visible-todo-list-container'

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp