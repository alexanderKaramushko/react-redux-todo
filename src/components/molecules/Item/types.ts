import { Todo } from '../../../store/todos/types';

export interface Props {
    todo: Todo;
    onClick: () => void;
    onRemove: () => void;
    onNameChange: (name: string) => void;
};

export interface EditProps {
    isEditing: boolean;
};

export interface ViewProps {
    isEditing: boolean;
    onDoubleClick: () => void;
};