import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import PageWrapper from "../components/PageWrapper";

// https://github.com/parcel-bundler/parcel/issues/2863#issue-426218466
const Logo = React.lazy(() => import("./Logo"));

export default function Dashboard({ children }) {
  return <>
    <Header>
      <PageWrapper>
        <div>
          <Logo />
        </div>

        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </PageWrapper>
    </Header>

    <Main>
      <PageWrapper>
        {children}
      </PageWrapper>
    </Main>

    <Footer>
      <PageWrapper>
        Copyright © {(new Date).getFullYear()}
      </PageWrapper>
    </Footer>
  </>
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  padding: 0 20px;
  
  background-color: #fafafa;
  box-shadow: 0 0 5px rgba(0, 0, 0, .08);

  img {
    height: 100%;
    min-height: 60px;
    max-height: 100px;  
  }

  nav { 
    a {
      padding: 20px;
      background-color: white;
      color: #333;

      &.active {
        background: var(--color-primary);
        color: white;
      }

      & + a {
        margin-left: 10px;
      }
    }
  }
`;

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
  padding: 20px;
`;

const Footer = styled.footer`
  background-color: #f3f3f3;
  padding: 20px;

  color: #666;
`;