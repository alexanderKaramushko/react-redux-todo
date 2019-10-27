import React from 'react';
import Button from '../../../containers/Button';
import { VisibilityFilters } from '../../../store/filters/constants';
import { palette } from 'styled-theme';
import styled from 'styled-components';

const StyledFooter = styled.div`
    background-color: ${palette('primary', 0)};
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Button filter={VisibilityFilters.SHOW_ALL}>All</Button>
            <Button filter={VisibilityFilters.SHOW_ACTIVE}>Active</Button>
            <Button filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Button>
        </StyledFooter>
    );
};

export default Footer
