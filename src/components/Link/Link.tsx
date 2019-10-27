import React from 'react';
import { Props } from './types';

const Link = (props: Props) => {
    const { active, onClick, children } = props;

    return (
        <button onClick={onClick} disabled={active}>
            {children}
        </button>
    );
};

export default Link;
