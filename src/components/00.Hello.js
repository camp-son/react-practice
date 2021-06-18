import React from 'react';

export default function Hello({name, color, isRequired}) {
    return (
        <div style={{color}}>
            {isRequired && <b>*</b>}
            안녕하세요. {name}
        </div>
    );
}

Hello.defaultProps = {
    name: 'NO NAME',
    color: 'black'
};
