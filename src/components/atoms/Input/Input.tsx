import styled from 'styled-components';
import { Props } from './types';

export const Input = styled.input.attrs((props: Props) => ({
    type: 'text',
    defaultValue: props.defaultValue
}))`
    outline: 0;
    height: 100%;
    width: 100%;
`;
