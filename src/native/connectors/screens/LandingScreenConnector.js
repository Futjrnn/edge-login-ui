import { connect } from 'react-redux'

import * as actions from '../../../common/actions'
import LandingScreenComponent from '../../components/screens/LandingScreenComponent'

export const mapStateToProps = (state, ownProps) => {
  return {
    styles: ownProps.styles,
    showModal: state.workflow.betaModal
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startFlow: data => dispatch(actions.startWorkflow(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  LandingScreenComponent
)
