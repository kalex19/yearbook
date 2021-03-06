import React, { Component } from 'react';
import Cohort from './Cohort';
import Form from './Form';
import people from '../data/yearbook-data.js';
import '../styles/App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			staff: people.staff,
			students: people.students
		};
	}

	addStudent = newStudent => {
		this.setState({
			students: [ ...this.state.students, newStudent ]
		});
	};

	deleteStudent = (id, category) => {
		const { students, staff } = this.state;
		if (category === 'staff') {
			this.setState({
				staff: staff.filter(member => member.id !== id)
			});
		} else {
			this.setState({
				students: students.filter(student => student.id !== id)
			});
		}
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="siteTitle"> Turing Yearbook </h1>
				</header>
				<Form addStudent={this.addStudent} />
				<Cohort staff={this.state.staff} students={this.state.students} deleteStudent={this.deleteStudent} />
			</div>
		);
	}
}

export default App;
