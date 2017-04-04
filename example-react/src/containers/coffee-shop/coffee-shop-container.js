import { connect } from 'react-redux'
import CoffeeShopComponent from '../../components/coffee-shop/coffee-shop'

const mapStateToProps = (state) => {
  return {
    // This 'todos' data will be inject to 'TodoList' component
    shopData: state.coffeeShopReducer
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

const CoffeeShopContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeShopComponent)

export default CoffeeShopContainer