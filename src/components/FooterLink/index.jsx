import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router"

import './FooterLink.scss';

function FooterLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

return (
    <div className='FooterLink'>
         <Link to={to} {...props}>
            {children}
        </Link>
    </div>
    );
}
export default FooterLink;