import React, {Component} from 'react';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';
import { formatDistanceStrict, addMinutes, addSeconds } from 'date-fns'
import './app.css';


export default class App extends Component{
	
	state={
		todoData :[
		{id:1, text:'Completed task', addTime:formatDistanceStrict(addSeconds(new Date(), 17), new Date())},
		{id:2, text:'Editing task', addTime:formatDistanceStrict(addMinutes(new Date(), 5), new Date())},
		{id:3, text:'Active task', addTime:formatDistanceStrict(addMinutes(new Date(), 5), new Date())},
	]
		
	}

	deleteItem = (id) =>{
		this.setState(({todoData}) =>{
			
			const idx = todoData.findIndex(el=>el.id===id);
			const newData  = [
				...todoData.slice(0,idx),
				...todoData.slice(idx+1)
			];
			
			return{
				todoData:newData
			}
		})

	}


render(){
return (
	<div className = 'todoapp'>
	<NewTaskForm/>
	<TaskList todos = {this.state.todoData}
	onDelete = {this.deleteItem}/>
	<Footer/>
	</div>
	
	)
}
	
}