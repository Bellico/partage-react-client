import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

type MenuProps = {
  projects: {
    id: number,
    label: string,
    contents: {
      id: number,
      typeName: string
    }[]
  }[]
}

export const Menu: FunctionComponent<MenuProps> = ({ projects }) => (
  <Nav className="menu is-hidden-mobile">
    <a className="logo" href="/">
      <img src="/icons/share.svg" alt="share logo" />
    </a>
    <p className="menu-label">Partage</p>
    <ul className="menu-list">
      <li><a href="/">Home</a></li>
      <li><a href="/">Dashboard</a></li>
    </ul>
    <p className="menu-label">My Share</p>
    {
      projects.map(project =>
        <ul key={project.id} className="menu-list">
          <li>
            <NavLink to={`/board/${project.id}`} className="is-active">
              {project.label}
            </NavLink>
            <ul>
              {project.contents.map(content =>
                <li key={content.id}>
                  <NavLink to={`/board/${project.id}/content/${content.id}`}>
                    {content.typeName}
                  </NavLink>
                </li>
              )}
            </ul>
          </li>
        </ul>
      )
    }
  </Nav>
);

