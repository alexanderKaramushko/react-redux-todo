import React, { 
    Fragment, 
    useState, 
    useRef,
    useEffect
} from 'react';
import { Props, EditProps, ViewProps } from './types';
import styled from 'styled-components';
import {
    Label,
    Icon,
    Input,
} from '../../atoms';

import { ReactComponent as Check } from '../../../assets/check-symbol.svg';
import { ReactComponent as Cross } from '../../../assets/cross.svg';

const StyledCross = styled(Icon)``;

const Edit = styled(Input)<EditProps>`
    display: ${({ isEditing }) => isEditing ? 'block' : 'none'};
`;

const View = styled.li<ViewProps>`
    display: ${({ isEditing }) => isEditing ? 'none' : 'flex'};
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
    const { todo, onClick, onRemove, onNameChange } = props;
    const [editing, setEdit] = useState(false);
    const editInput = useRef(null);

    const handleEdit = (e: any) => {
        if (e.target !== editInput.current) {
            onNameChange((editInput as any).current.value);
            setEdit(false);
        };
    };

    useEffect(() => {
        editing
        ? document.addEventListener('click', handleEdit)
        : document.removeEventListener('click', handleEdit);

        return () => {
            document.removeEventListener('click', handleEdit);
        };
    }, [editing]);

    return (
        <Fragment>
            <View onDoubleClick={() => setEdit(true)} isEditing={editing}>
                <Icon
                    rounded
                    width={20}
                    height={20}
                    primary
                    active={todo.completed}
                    onClick={onClick}
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
                    onClick={() => onRemove()}
                >
                    <Cross />
                </StyledCross>
            </View>
            <Edit isEditing={editing} defaultValue={todo.name} ref={editInput} />
        </Fragment>
    );
};

export default Item;
