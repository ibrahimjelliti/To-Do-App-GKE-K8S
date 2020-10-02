import { connect } from 'react-redux';
import * as todoActions from '../../redux/actions/todoActions';
import Todos from '../presentational/components/Todo/Todos';

// Map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    mappedTodoState: state.todoState
  }
}

// Map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(todoActions.fetchTodos()),
    mappedEditTodo: todoToEdit => dispatch(todoActions.editTodo(todoToEdit)),
    mappedshowEditModal: todoToEdit => dispatch(todoActions.showEditModal(todoToEdit)),
    mappedhideEditModal: () => dispatch(todoActions.hideEditModal()),
    mappedDeleteTodo: todoToDelete => dispatch(todoActions.deleteTodo(todoToDelete)),
    mappedshowDeleteModal: todoToDelete => dispatch(todoActions.showDeleteModal(todoToDelete)),
    mappedhideDeleteModal: () => dispatch(todoActions.hideDeleteModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
