import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, getAllTodos } from '../redux/actions';
import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from '../redux/actions/type';

import Todo from './Todo';
import Tabs from './Tabs';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  if (!todos) {
    // Handle the case when todos is undefined (loading state)
    return <div>Loading...</div>;
  }

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    }
  };

  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

  return (
    <div>
      <div>
        <Tabs currentTab={currentTab} />

        {todos.some((todo) => todo.done) ? (
          <button onClick={removeDoneTodos} className="button clear">
            Remove Done Todos
          </button>
        ) : null}
      </div>

      <h2>Active Todos</h2>
      {getTodos().map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
