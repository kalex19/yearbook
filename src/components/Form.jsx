import React, { Component } from 'react';
import '../styles/Form.css';

export class Form extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			photo: '',
			quote: '',
			superlative: ''
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	submitInput = e => {
		e.preventDefault();
		const newStudent = {
			...this.state,
			id: Date.now(),
			key: Date.now()
		};
		this.props.addStudent(newStudent);
		this.clearInputs();
	};

	clearInputs = () => {
		this.setState({
			name: '',
			photo: '',
			quote: '',
			superlative: ''
		});
	};

	render() {
		return (
			<div className="studentContainer">
				<h1 className="title">Welcome to the New Student!</h1>
				<form className="studentForm">
					<input
						type="text"
						placeholder="name"
						name="name"
						value={this.state.name}
						onChange={e => this.handleChange(e)}
					/>
					<input
						type="text"
						placeholder="photo url"
						name="photo"
						value={this.state.photo}
						onChange={e => this.handleChange(e)}
					/>
					<input
						type="text"
						placeholder="quote"
						name="quote"
						value={this.state.quote}
						onChange={e => this.handleChange(e)}
					/>
					<input
						type="text"
						placeholder="superlative"
						name="superlative"
						value={this.state.superlative}
						onChange={e => this.handleChange(e)}
					/>
					<button className="submitBtn" onSubmit={e => this.submitInput(e)}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Form;
