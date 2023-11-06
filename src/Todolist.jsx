import React, { useState } from 'react';
import './Cardlist.css';
import TodoItem from './TodoItems.js'; // TodoItem 컴포넌트를 불러옴

function Todolist() {
  const [todolist, setTodolist] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentHandler = (event) => {
    setContent(event.target.value);
  };

  const MAX_TITLE_LENGTH = 20;
  const MAX_CONTENT_LENGTH = 40;

  const addListButtonHandler = (event) => {
    event.preventDefault(); // 양식 제출을 중단

    if (!title) {
      alert('제목을 입력해주세요!');
      return;
    }

    if (!content) {
      alert('내용을 입력해주세요!');
      return;
    }

    if (title.length > MAX_TITLE_LENGTH) {
      alert('제목은 20자 이하로 입력해주세요!');
      return;
    }

    if (content.length > MAX_CONTENT_LENGTH) {
      alert('내용은 40자 이하로 입력해주세요!');
      return;
    }

    const newTodoList = {
      id: todolist.length + 1,
      title: title,
      content: content,
      isDone: false,
    };

    setTodolist([...todolist, newTodoList]);
    setTitle('');
    setContent('');
  };

  const deleteTodolist = (id) => {
    const updatedTodoList = todolist.filter((item) => item.id !== id);
    setTodolist(updatedTodoList);
  };

  const toggleDone = (id) => {
    const updatedTodoList = todolist.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setTodolist(updatedTodoList);
  };

  const onGoingList = todolist.filter((item) => !item.isDone);
  const doneList = todolist.filter((item) => item.isDone);

  return (
    <div className='fullLayOut'>
      <header className='headerContainer'>
        <div className='leftTxt'>MY TO DO LIST</div>
        <div className='rightTxt'>React</div>
      </header>
      <div>
        <form className='todoListForm' onSubmit={addListButtonHandler}>
          <div className='submitForm'>
            <div className='title'>
              제목 : &nbsp;
              <input value={title} onChange={titleHandler} />
            </div>
            <div className='content'>
              내용 : &nbsp;
              <input value={content} onChange={contentHandler} />
            </div>
            <div className='admitButton'>
              <button className='addButton' type='submit'>
                추가하기
              </button>
            </div>
          </div>
          <div className='onGoing'>진행 중🔥</div>
          <div className='List'>
            {onGoingList.map(function (item) {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  onDelete={deleteTodolist}
                  onToggleDone={toggleDone}
                />
              );
            })}
          </div>
          <div className='statusButtons'>
            <div className='Done'>완료⭐️</div>
          </div>
          <div className='List'>
            {doneList.map(function (item) {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  onDelete={deleteTodolist}
                  onToggleDone={toggleDone}
                />
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Todolist;
