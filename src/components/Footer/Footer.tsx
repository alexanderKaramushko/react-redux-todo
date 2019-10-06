import React, { Fragment } from 'react';
import Link from '../../containers/Link';
import { VisibilityFilters } from '../../store/filters/constants';

const Footer = () => {
    return (
        <Fragment>
            <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
            <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
            <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
        </Fragment>
    );
};

export default Footer
