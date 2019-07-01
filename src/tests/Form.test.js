import React from 'react';
import Form from '../components/Form';
import { shallow } from 'enzyme';
import people from '../data/yearbook-data';

describe('Form', () => {
	let wrapper, mockAddStudent;

	beforeEach(() => {
		mockAddStudent = jest.fn();
		wrapper = shallow(<Form addStudent={mockAddStudent} />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
	describe('handleChange', () => {
		it('should reset state  of name when handleChange is called', () => {
			const mockEvent = {
				target: {
					name: 'name',
					value: 'bob'
				}
			};
			wrapper.instance().handleChange(mockEvent);
			expect(wrapper.state('name')).toEqual('bob');
		});
	});
	describe('submitInputs', () => {
		it('should call addStudent with the expected arguement', () => {
			const mockNewStudent = {
				id: Date.now(),
				name: 'JK',
				photo: 'fakeurl.com',
				quote: 'pink',
				superlative: 'most likely to be a cat'
			};
			wrapper.setState({
				name: 'JK',
				photo: 'fakeurl.com',
				quote: 'pink',
				superlative: 'most likely to be a cat'
			});
			wrapper.instance().submitInput({ preventDefault: () => {} });
			expect(mockAddStudent).toHaveBeenCalledWith(mockNewStudent);
		});
	});

	describe('clearInputs', () => {
		it('should clear inputs when called', () => {
			wrapper.setState({
				name: 'bob',
				photo: 'bob.com',
				quote: 'bob is great',
				superlative: 'most likely to be bob'
			});
			wrapper.instance().clearInputs();
			expect(wrapper.state()).toEqual({
				name: '',
				photo: '',
				quote: '',
				superlative: ''
			});
		});
	});
});
