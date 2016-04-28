import React from 'react';
import {Button, Pagination, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';
import NavLink from '../NavLink/NavLink.jsx';

require('./App.scss');

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
			        <Link to='/home'>蓝莓会开发文档</Link>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			        <NavItem eventKey={1} href="#"><NavLink to="/repos/reactjs/react-router">前端规范</NavLink></NavItem>
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
			        <NavItem eventKey={2}><NavLink to="/Login">登录</NavLink></NavItem>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>

			  {this.props.children}

		  </div>
    );
  }
}

