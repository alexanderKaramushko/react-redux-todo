import React from 'react';
import { Props } from './types';
import styled from 'styled-components';
import { palette } from 'styled-theme';
import { Animate } from '../';

const StyledLabel = styled.div`
    position: relative;
`;

const Linethrough = styled.span`
    position: absolute;
    top: 50%;
    height: 1px;
    background: ${palette('primary', 7)};
    transform: translateY(-50%);
`;

export const Label = (props: Props) => {
    const { name, completed } = props;

    return (
        <StyledLabel>
            <Animate
                condition={completed}
                duration={300}
                animName="expandRight"
                appear
            >
                <Linethrough/>
            </Animate>
            <Animate
                condition={completed}
                duration={300}
                animName="fade"
                appear
            >
                <div>
                    {name}
                </div>
            </Animate>
        </StyledLabel>
    );
};