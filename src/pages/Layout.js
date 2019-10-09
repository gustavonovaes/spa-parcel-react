import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// https://github.com/parcel-bundler/parcel/issues/2863#issue-426218466
const Logo = React.lazy(() => import("../components/Logo"));

export default function Layout({ children }) {
  return <Container>
    <header>
      <div className="wrapper">
        <div>
          <Logo />
        </div>

        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>

    <main>
      <div className="wrapper">
        {children}
      </div>
    </main>

    <footer>
      <div className="wrapper">
        Copyright © {(new Date).getFullYear()}
      </div>
    </footer>
  </Container>
}

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  
  .wrapper {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    
    width: 100%;
    max-width: 1040px;
    margin: 0 auto;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
    @media(min-width: 800px) {
      height: 100px;
      padding: 0 20px;  
    }
    
    background-color: #fafafa;
    box-shadow: 0 0 5px rgba(0, 0, 0, .08);

    img {
      height: 100%;
      min-height: 60px;
      max-height: 100px;  
    }

    nav { 
      a {
        padding: 10px;
        @media(min-width: 800px) { 
          padding: 20px;
        }

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
  }
  
  main {
    flex-grow: 1;
    overflow: auto;

    padding: 10px;
    @media(min-width: 800px) { 
      padding: 20px;
    }
  }

  footer {
    background-color: #f3f3f3;
    
    padding: 10px;
    @media(min-width: 800px) { 
      padding: 20px;
    }

    color: #666;
  }
`;