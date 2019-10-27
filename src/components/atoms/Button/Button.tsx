import React from 'react';
import { Props, ButtonProps } from './types';
import styled from 'styled-components';
import { font, palette, size } from 'styled-theme';

const StyledButton = styled.button<ButtonProps>`
    color: ${({ active }) => active ? palette('primary', 2) : palette('secondary', 1)};
    border: 1px solid ${({ active }) => active ? palette('active', 0) : 'transparent'};
    border-radius: ${size('radius')};
    font-size: ${size('fontMedium')};
    font-family: ${font('primary')};
    padding: 3px 8px;
    background-color: transparent;
    outline: none;
    cursor: pointer;

    &:hover {
        color: ${palette('modified', 0)}
    }
`;

const Button = (props: Props) => {
    const { active, onClick, children } = props;

    return (
        // @ts-ignore - проблема с определением типов
        <StyledButton onClick={onClick} active={active}>
            {children}
        </StyledButton>
    );
};

export default Button;
