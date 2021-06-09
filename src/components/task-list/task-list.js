import React from 'react';
import Task from '../task';
import './task-list.css';

const TaskList = ({todos, onDelete}) =>{
	const elements =  todos.map(item =>{
		return (
			<Task {...item} 
					key  = {item.id}
					onDelete = {() => onDelete(item.id)}	/>
		)
	})
		
	return(
	<main className = 'main'>
		<ul className = 'todo-list' key = 'ul'>
		{elements}
		</ul>
		
	</main>
		  )
}

export default TaskList;