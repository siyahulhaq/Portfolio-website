/* eslint-disable no-plusplus */
import React, { useEffect } from 'react';
import Link from 'next/link';
import { MenuItem, MenuLink, MenyList, NavMenuContainer } from './style';
import menus from './menus.json';

interface NavMenuProps {
    isMenuOpen: boolean;
    closeMenu: () => void;
}

function NavMenu({ isMenuOpen, closeMenu }: NavMenuProps) {
    useEffect(() => {
        const links = document.getElementsByTagName?.('a');
        for (let index = 0; index < links.length; index++) {
            const link = links[index];
            link.onclick = () => {
                closeMenu();
            }
        }
    }, [closeMenu])
    return (
        <NavMenuContainer isMenuOpen={isMenuOpen}>
            <MenyList>
                {menus.map((item, index) => (
                        <MenuItem index={index} key={item.title}>
                            <Link href={item.link} passHref>
                                <MenuLink index={index}>
                                    <img className="menu-link-background" src={item.bg1} alt="stars" />
                                    {item.title}
                                </MenuLink>
                            </Link>
                        </MenuItem>
                    ))}
            </MenyList>
        </NavMenuContainer>
    )
}

export default NavMenu
