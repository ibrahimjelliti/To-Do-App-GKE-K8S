import { connect } from 'react-redux';
import * as todoActions from '../../redux/actions/todoActions';
import Todo from '../presentational/components/Todo/Todo';

// Map state from store to props
const mapStateToProps = (state) => {
  return {
    mappedTodoState: state.todoState
  }
}

// Map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    mappedfetchTodoById: todoId => dispatch(todoActions.fetchTodoById(todoId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);
