import React from 'react';
import { Props } from './types';
import Label from '../../atoms/Label';
import Icon from '../../atoms/Icon';
import styled from 'styled-components';

import { ReactComponent as Check } from '../../../assets/check-symbol.svg';
import { ReactComponent as Cross } from '../../../assets/cross.svg';

const StyledCross = styled(Icon)``;

const StyledItem = styled.li`
    display: flex;
    user-select: none;
    cursor: pointer;

    ${StyledCross} {
        display: none;
    }

    &:hover {
        ${StyledCross} {
            display: block;
        }
    }
`;

const Item = (props: Props) => {
    const { todo, onClick, onRemove } = props;

    const handleRemove = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        onRemove();
    };

    return (
        <StyledItem onClick={onClick}>
            <Icon
                rounded
                width={20}
                height={20}
                primary
                active={todo.completed}
            >
                <Check />
            </Icon>
            <Label
                name={todo.name}
                completed={todo.completed}
            />
            <StyledCross
                width={20}
                height={20}
                secondary
                onClick={(e) => handleRemove(e)}
            >
                <Cross />
            </StyledCross>
        </StyledItem>
    );
};

export default Item;
