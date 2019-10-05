import React from 'react';
import { connect } from 'react-redux';
import { AddTodo } from '../../components';
import { Props } from './types';

const AddTodoContainer = (props: Props) => <AddTodo {...props} />;

export default connect()(AddTodoContainer);
