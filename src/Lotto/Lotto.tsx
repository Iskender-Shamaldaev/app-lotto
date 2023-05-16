import React from 'react';

interface IPersonProps {
    number: number;
}

const Lotto: React.FC<IPersonProps> = props => {
    return (
        <div className="lotto">
            <h1>{props.number}</h1>
        </div>
    );
};

export default Lotto;