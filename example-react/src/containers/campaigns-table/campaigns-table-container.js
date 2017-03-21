import { connect } from 'react-redux'
// import { toggleTodo } from './actions'
import CampaignTableComponent from '../../components/campaigns-table/campaigns-table'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    // This 'todos' data will be inject to 'TodoList' component
    camList: state.capaignTableReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // This 'onTodoClick' event will be inject to 'TodoList' component
    onTodoClick: (id) => {
      // dispatch(toggleTodo(id))
    }
  }
}

const CamListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignTableComponent)

export default CamListContainer