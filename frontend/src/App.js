import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { connect } from 'react-redux';
import  {requestFetchAdd, requestFetchAddItem}  from "./redux/action";

function App(props) {
  const [todoTitle, setTodoTitle] = useState('');
  const {todos,loading} =props;
  useEffect(() => {   
  //  const response = await fetch('http://localhost:4000/');
  //  const json = await response.json();
  // await props.initializeList(json);
  props.requestFetchAdd()
  
  }, []);

  const addTodo = (event) => {
    if (event.key === "Enter") {
    props.requestFetchAddItem(todoTitle);
      setTodoTitle("");
    }
  };

  return (
  <>
{  loading ?
  <div>LOADIIIIING</div> : <div className="container">
      <h1>Todo app</h1>
      <div className="input-field">
        <input
          type="text"
          value={todoTitle}
          onChange={event => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
          />
        <label>Todo name</label>
      </div>

      <TodoList todos={todos} />
    </div>}
    </>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  loading:state.loading,
});
const mapDispatchToProps = {
  requestFetchAdd: requestFetchAdd,
  requestFetchAddItem:requestFetchAddItem,
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
