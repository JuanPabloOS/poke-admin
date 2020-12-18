import React, { useContext } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Items from '../screens/Items';
import Moves from '../screens/Moves';
import Pokedex from '../screens/Pokedex';
import TypesRelations from '../screens/TypesRelations';
import styled from 'styled-components';
import { ThemeModeContext } from '../context/ThemeContext';
import { dark, gray } from '../styles';

const StyledNavItem = styled.span`
  color: ${(props) => props.theme.neutroTextColor};
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  display: block;
`;
const StyledNavbarBrand = styled.span`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`;

const AppRouter = () => {
  const { darkMode, changeMode } = useContext(ThemeModeContext);
  return (
    <>
      <Router>
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{
            backgroundColor: darkMode ? dark[300] : gray[100],
          }}
        >
          <NavLink to="/">
            <StyledNavbarBrand>Poke-admin</StyledNavbarBrand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <StyledNavItem>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label={darkMode ? 'Light' : 'Dark'}
                  onClick={changeMode}
                />
              </StyledNavItem>
              <NavLink to="/Items">
                <StyledNavItem>Items</StyledNavItem>
              </NavLink>
              <NavLink to="Moves">
                <StyledNavItem>Moves</StyledNavItem>
              </NavLink>
              <NavLink to="Types">
                <StyledNavItem>Types</StyledNavItem>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Pokedex} />
          <Route exact path="/items" component={Items} />
          <Route exact path="/moves" component={Moves} />
          <Route exact path="/types" component={TypesRelations} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
