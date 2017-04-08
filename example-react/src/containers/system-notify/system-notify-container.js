import { connect } from 'react-redux'
import SystemNotifyComponent from '../../components/system-notify/system-notify'

const mapStateToProps = (state) => {
    return {
        mgs: state.systemNotifyReducer.mgs,
        duration: state.systemNotifyReducer.duration,
        open: state.systemNotifyReducer.open
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const SystemNotifyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemNotifyComponent)

export default SystemNotifyContainer