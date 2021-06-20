import React, {Component} from 'react';

// function Hello({name, color, isRequired}) {
//     return (
//         <div style={{color}}>
//             {isRequired && <b>*</b>}
//             안녕하세요. {name}
//         </div>
//     );
// }

class Hello extends Component {
    render() {
        const {name, color, isRequired} = this.props;
        return (
            <div style={{color}}>
                {isRequired && <b>*</b>}
                안녕하세요. {name}
            </div>
        );
    }
}

Hello.defaultProps = {
    name: 'NO NAME',
    color: 'black'
};

export default Hello
