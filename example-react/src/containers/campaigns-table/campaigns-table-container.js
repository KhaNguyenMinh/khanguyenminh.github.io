import { connect } from 'react-redux'
import CampaignTableComponent from '../../components/campaigns-table/campaigns-table'

const mapStateToProps = (state) => {
  console.log('map store event')
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