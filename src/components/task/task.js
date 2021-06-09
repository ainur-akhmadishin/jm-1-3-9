import React, {Component} from 'react';
import './task.css';

export default class  Task extends Component{
	
	state = {
		active:true
	}
	
	onSpanClick = () =>{
		this.setState((state) => {
		return {
			active:!state.active
		}
		})
	}

	
	render(){
		
		const { text, addTime, onDelete} = this.props;
		let liClass ='';
		const {active} = this.state;
		if (!active){
			liClass +='completed'
		}
		
		
		return <li className={liClass} >
				<div className="view">
					<input className="toggle" type="checkbox"/>
					<label>
						<span className="description" onClick = {this.onSpanClick}>{text}</span>		
						<span className="created"> created {addTime} ago </span>
					</label>
					<button className="icon icon-edit"></button>
					<button className="icon icon-destroy"
					onClick = {onDelete}
					></button>
					
				</div>
				<input type="text" className="edit" value = {text} readOnly/>
          	</li>
	}
}


