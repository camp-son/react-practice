import { useCallback, useState } from "react";

function useInputs(initializeForm) {
	const [form, setForm] = useState(initializeForm);

	const onChange = useCallback((e) => {
		const {name, value} = e.target;
		setForm(((form) => ({...form, [name]: value})));
	}, []);

	const onReset = useCallback(() => setForm(initializeForm), [initializeForm]);

	return [form, onChange, onReset];
}

export default useInputs;
