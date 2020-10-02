import { connect } from 'react-redux';
import * as appActions from '../../redux/actions/appActions';
import App from '../presentational/components/App/App';
import * as todoActions from '../../redux/actions/todoActions';

// Map state from store to props
const mapStateToProps = (state) => {
  return {
    mappedAppState: state.appState
  }
}

// Map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    mappedToggleAddTodo: () => dispatch(appActions.toggleAddTodo()),
    mappedAddTodo: todo => dispatch(todoActions.addNewTodo(todo))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
