import Link from 'next/link';
import React from 'react';
import NavCSS from './Nav.module.css'
function Nav() {
    const links = [
        {title:'Home',href:'/'},
        {title:'About',href:'/about'},
        {title:'Shop',href:'/shop'},
        {title:'Contact',href:'/contact'},
    ]
    return (
         <div style={{backgroundColor:'#b18857',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                <nav className={NavCSS.navbar}>
                <ul className={NavCSS.navItems}>
                    {
                       links.map((link , idx)=> <li className={NavCSS.navLink} key={idx}><Link href={link.href}>{link.title}</Link></li> )
                    }
                </ul>
            </nav>
         </div>
    );
}

export default Nav;