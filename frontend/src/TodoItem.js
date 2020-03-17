import React, { useContext} from 'react'
import {Context} from './Context'
import { connect } from 'react-redux';
import {toogleTodo,removeTodo} from './redux/action'

function TodoItem(props) {
  const cls = ['todo'];
const {_id,title, completed} = props;
 if(completed){
   cls.push('completed')
 }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={()=>props.toogleTodo(_id)}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={()=>props.removeTodo(_id)}
        >
          delete
        </i>
      </label>
    </li>
  )
}

const mapStateToProps = (state) => ({
  todos: state,
});
const mapDispatchToProps = (dispatch) => ({
  removeTodo: (id)=> dispatch(removeTodo(id)),
  toogleTodo: (id) => dispatch(toogleTodo(id))
});
export default connect(mapStateToProps,mapDispatchToProps)(TodoItem);
