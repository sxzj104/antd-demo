import React, {
	useEffect,
	useState,
	useImperativeHandle,
	forwardRef,
} from 'react';

function Effect({ ...props }, ref) {
	const [count, setCount] = useState(0);
	useImperativeHandle(ref, () => ({
		getCount() {
			return count;
		},
		setCount(num) {
			setCount(count + num);
		},
	}));

	useEffect(() => {
		console.log(`当前点击了${count}次`);
		console.log('props', props);
	});

	return (
		<div style={{ color: 'initial' }}>
			<button onClick={() => setCount(count + 1)}>{count}Effect</button>
		</div>
	);
}

export default forwardRef(Effect);
