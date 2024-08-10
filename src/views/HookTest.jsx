import { useEffect, useState } from 'react';
const HookTest = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count + 1);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [count]);

    return (
        <div style={{ marginTop: '50px' }}>
            <h1>useEffect 测试</h1>
            <span>定时器：{count}</span>
        </div>
    );
};
export default HookTest;
