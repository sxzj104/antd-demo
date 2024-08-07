import React, { createRef } from 'react';
const ClassDemo = class extends React.Component {
    state = {
        btnName: 'sayHi',
        num: 1,
        btnRef: createRef(),
        person: [{ name: 'haha' }, { name: 'xixi' }],
    };
    sayHi = () => {
        console.log('hi');
        this.setState({
            num: this.state.num + 1,
        });
    };
    render() {
        return <div>{this.props.classList(this.state.person)}</div>;
    }
};
export default ClassDemo;
