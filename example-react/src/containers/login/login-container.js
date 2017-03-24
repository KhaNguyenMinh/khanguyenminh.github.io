import { connect } from 'react-redux'
import LoginModalComponent from '../../components/login/login'

const mapStateToProps = (state) => {
  return {
    // This 'todos' data will be inject to 'TodoList' component
    userData: state.loginReducer,
    open: state.loginReducer.open
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

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModalComponent)

export default LoginContainer