import React from 'react';

import {Button, Pagination, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';

require('./App.css');

// export default () => <h1>Hello World</h1>;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
    	<div>
			  <Navbar inverse>
			  	<Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">蓝莓会开发文档</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			        <NavItem eventKey={1} href="#">前端规范</NavItem>
			        <NavItem eventKey={2} href="#">入门</NavItem>
			        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
			          <MenuItem eventKey={3.1}>Action</MenuItem>
			          <MenuItem eventKey={3.2}>Another action</MenuItem>
			          <MenuItem eventKey={3.3}>Something else here</MenuItem>
			          <MenuItem divider />
			          <MenuItem eventKey={3.3}>Separated link</MenuItem>
			        </NavDropdown>
			      </Nav>
			      <Nav pullRight>
			        <NavItem eventKey={1} href="#">Link Right</NavItem>
			        <NavItem eventKey={2} href="#">Link Right</NavItem>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
		  </div>
    );
  }
}

