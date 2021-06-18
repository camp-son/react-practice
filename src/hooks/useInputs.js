import { useCallback, useReducer, useState } from "react";

const EVENT_NAME = {
	ON_CHANGE: 'ON_CHANGE',
	ON_RESET: 'ON_RESET'
};

function reducer(state, action) {
	switch(action.event) {
		case EVENT_NAME.ON_CHANGE:
			return {
				...state,
				[action.name]: action.value
			};
		case EVENT_NAME.ON_RESET:
			return {
				...state,
				...action.form
			};
		default:
			return state;
	}
}

function useInputs(initializeForm) {
	// const [form, setForm] = useState(initializeForm);
	const [form, dispatch] = useReducer(reducer, initializeForm);

	const onChange = useCallback((e) => {
		const {name, value} = e.target;
		// setForm(((form) => ({...form, [name]: value})));
		dispatch({
			event: EVENT_NAME.ON_CHANGE,
			name, 
			value
		})
	}, []);

	const onReset = useCallback(() => dispatch({
		event: EVENT_NAME.ON_RESET,
		form: initializeForm
	}), [initializeForm]);

	return [form, onChange, onReset];
}

export default useInputs;
