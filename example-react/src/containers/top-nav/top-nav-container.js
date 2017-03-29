import { connect } from 'react-redux'
import TopNavComponent from '../../components/top-nav/top-nav'

const mapStateToProps = (state) => {
  return {
    // This 'todos' data will be inject to 'TodoList' component
    logged: state.topNavReducer.logged
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

const TopNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavComponent)

export default TopNavContainer