import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import './TodoList.css';

function TodoList({
	index,
	text,
	handleRemove,
	time,
	handleUpdate,
	completeTodo,
	isComplete,
}) {
	return (
		<div key={index} className='todoList__item'>
			<div
				className={isComplete ? 'complete' : ''}
				onClick={(e) => completeTodo(index)}
			>
				<input
					className={isComplete ? 'complete' : ''}
					type='text'
					id={index}
					value={text}
					onChange={(e) => handleUpdate(e.target.value, index)}
				/>
				<p>{time}</p>
			</div>

			<span>
				<IconButton onClick={() => handleRemove(index)}>
					<DeleteIcon style={{ color: 'white' }} />
				</IconButton>
			</span>
		</div>
	);
}

export default TodoList;
