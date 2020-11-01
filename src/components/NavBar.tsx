import * as React from 'react';
import { Link } from "react-router-dom";

const navItemClass = 'nav__item';

interface LinkItem {
  to: string,
  label: string
}

interface NavBarProps {
  links: LinkItem[]
}

export const NavBar = ({ links = [] }: NavBarProps): JSX.Element => {
  return (
    <nav>
      <ul>
        {links.map(({ to, label }, index) => (
          <li key={index} className={navItemClass}>
            <Link to={to}>{label}</Link>
          </li>))
        }
      </ul>
    </nav>
  );
}