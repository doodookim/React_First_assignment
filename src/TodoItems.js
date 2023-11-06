import React from 'react';

const TodoItem = ({ item, onDelete, onToggleDone }) => {
  return (
    <div className='todoForm'>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
      <div className='buttonEditContainer'>
        <button
          type='button'
          className='deleteButton'
          onClick={() => onDelete(item.id)}
        >
          삭제
        </button>
        <button
          type='button'
          className='doneButton'
          onClick={() => onToggleDone(item.id)}
        >
          {item.isDone ? '완료 해제' : '완료'}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
