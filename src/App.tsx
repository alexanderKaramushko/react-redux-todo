import './App.css';
import React, { Fragment } from 'react';
import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Fragment>
      <AddTodo />
      <TodoList />
      <Footer />
    </Fragment>
  );
}
export default App;
