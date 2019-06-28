import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

//describe('App', () => {
// it('should match snapshot', () => {
//   const staffArray = ['a', 'b', 'c']
//   const studentArray = ['x', 'y', 'z']
//   const wrapper = shallow( <Form addStudent={jest.fn()}/>
//   <Cohort staff={staffArray} students={studentArray} deleteStudent={jest.()//}/> )
// });
//});
