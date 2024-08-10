import React from 'react';
import Class from './Class';
class Test extends React.Component {
    state = {
        person: [
            { name: 'bin', age: 18, editName: '' },
            { name: 'plk', age: 20, editName: '' },
        ],
    };
    componentDidMount() {
        console.log('this', this);
    }
    changeName = (name, newName) => {
        this.setState({
            person: this.state.person.map(item => {
                if (item.name === name) {
                    item.name = newName;
                }
                return item;
            }),
        });
    };
    delPerson = name => {
        this.setState({
            person: this.state.person.filter(item => item.name !== name),
        });
    };
    classList = val => {
        return (
            <ul>
                {val.map(item => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        );
    };
    render() {
        return (
            <div>
                <ul>
                    {this.state.person.map((item, index) => (
                        <div key={item.age}>
                            <li>{item.name}</li>
                            <input
                                value={item.name}
                                onChange={e => {
                                    this.changeName(item.name, e.target.value);
                                }}
                            ></input>
                            <button onClick={() => this.changeName(item.name)}>
                                改名
                            </button>
                            <button onClick={() => this.delPerson(item.name)}>
                                删除
                            </button>
                        </div>
                    ))}
                </ul>
                <button
                    onClick={() => {
                        this.setState({
                            person: [
                                ...this.state.person,
                                {
                                    name: 'bin' + this.state.person.length,
                                    age: 18 + Date.now(),
                                    editName: '',
                                },
                            ],
                        });
                    }}
                >
                    添加
                </button>
                <Class classList={this.classList} />
            </div>
        );
    }
}
export default Test;
