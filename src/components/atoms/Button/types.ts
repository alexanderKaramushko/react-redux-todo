import { ReactNode } from 'react';

export interface Props {
    active: boolean;
    onClick: () => void;
    children: ReactNode;
}

export interface ButtonProps {
    active?: boolean;
};