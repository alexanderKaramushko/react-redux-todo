import './App.css';
import React, { Fragment } from 'react';
import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';

const App: React.FC = () => {
  return (
    <Fragment>
      <AddTodo />
      <TodoList />
    </Fragment>
  );
}
export default App;
