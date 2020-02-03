import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #181818;
  padding: 0.5em;
  width: 15rem;

  a{
    color: #fff;
  }

  .logo{
    display: flex;
    justify-content: center;

    img{
      width: 50%;
    }
  }
`;

export const Menu = () => (
  <Nav className="menu is-hidden-mobile">
    <a className="logo" href="/">
      <img src="/icons/share.svg" alt="share logo" />
    </a>
    <p className="menu-label">Partage</p>
    <ul className="menu-list">
      <li><a href="/">Dashboard</a></li>
      <li><a href="/">Customers</a></li>
    </ul>
    <p className="menu-label">My Share</p>
    <ul className="menu-list">
      <li>
        <a href="/" className="is-active">New project </a>
        <ul>
          <li><a href="/">Todo Content</a></li>
          <li><a href="/">Text Content</a></li>
          <li><a href="/">Picture Content</a></li>
        </ul>
      </li>
    </ul>
  </Nav>
);
