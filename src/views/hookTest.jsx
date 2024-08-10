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
            <span>定时器：{count}</span>
        </div>
    );
};
export default HookTest;
