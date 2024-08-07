import styles from './styles.module.scss';
import { useRef, useState, useEffect } from 'react';
import { Button } from 'antd';
import Ref from './Ref';
const List = () => {
    const [mapList, setMapList] = useState([
        { id: 1, name: '销户', content: '我是销户' },
        { id: 2, name: 'plk', content: '我是plk' },
    ]);
    const [content, setContent] = useState('');
    const ref = useRef();
    useEffect(() => {
        console.log('styles', styles);
    }, []);

    function submit(a, e) {
        console.log('e', e);
        ref.current.setCount(11);
        setMapList([
            ...mapList,
            { id: mapList.length + 1, name: 'bin', content },
        ]);
    }
    return (
        <>
            <>
                <div>发表评论：</div>
                <textarea
                    defaultValue={content}
                    onChange={e => {
                        console.log('e.target.value', e.target.value);
                        setContent(e.target.value);
                    }}
                ></textarea>
                <button
                    onClick={e => {
                        submit(123, e);
                    }}
                >
                    提交
                </button>
            </>
            <ul>
                {mapList.map(item => (
                    <li className={styles['list-content']} key={item.id}>
                        姓名：{item.name}
                        <div className={styles['content']}>评论内容：</div>
                        <textarea readOnly value={item.content}></textarea>
                        {item.name === 'bin' && (
                            <button
                                onClick={() => {
                                    setMapList(
                                        mapList.filter(i => i.id !== item.id)
                                    );
                                }}
                            >
                                删除
                            </button>
                        )}
                        <Ref ref={ref} content={content} />
                    </li>
                ))}
            </ul>
            <Button type='primary' danger>
                删除
            </Button>
        </>
    );
};
export default List;
