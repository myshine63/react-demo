import React, {useState} from "react";
import {connect} from "react-redux";
import {Input, Button} from "antd";
import * as todoActions from '../../store/todo/todoActionCreator'
import todoConstants from "../../store/todo/todoConstants";
import './scss/todo.scss'

function TodoPage({dispatch, todoList}) {
  const [userInput, setUserInput] = useState('');
  const visibility = todoList.visibilityFilter

  function addTodo() {
    dispatch(todoActions.addTodo({text: userInput, completed: false}))
  }

  function changeFilter(type) {
    dispatch(todoActions.setVisibilityFilter(type))
  }

  return (
  <div className='todo-container'>
    <h1>react-redux实现一个todo列表的案例</h1>
    <h3>输入内容，回车添加待办</h3>
    <Input type='text' onPressEnter={
      addTodo
    } onChange={(e) => {
      setUserInput(e.target.value)
    }}/>
    <h1>操作按钮</h1>
    <Button onClick={() => {
      changeFilter(todoConstants.SHOW_ALL)
    }}>
      Show All
    </Button>
    <Button onClick={() => {
      changeFilter(todoConstants.SHOW_ACTIVE)
    }}>
      Show Active
    </Button>
    <Button onClick={() => {
      changeFilter(todoConstants.SHOW_COMPLETED)
    }}>
      Show Completed
    </Button>
    <h1>todo列表</h1>
    {/* 这里采用事件分发*/}
    <ul onClick={(e) => {
      dispatch(todoActions.toggleTodo(Number(e.target.dataset.index)))
    }} className='todo-list'>
      {
        todoList.todos.map((value, index) => {
          if (visibility === todoConstants.SHOW_ALL) {

          } else if (visibility === todoConstants.SHOW_COMPLETED) {
            if (!value.completed) {
              return false
            }
          } else {
            if (value.completed) {
              return false
            }
          }
          return <li key={index} data-index={index}>
            {value.text}
          </li>
        })
      }
    </ul>
  </div>
  )
}

function mapStateToProps(state) {
  return {
    todoList: state.todoReducer
  }
}

export default connect(mapStateToProps, null)(TodoPage)

