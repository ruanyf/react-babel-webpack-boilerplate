import React from 'react';
import {render, findDOMNode} from 'react-dom';
import {browserHistory} from 'react-router';
import {Button, Form, FormGroup, Col, FormControl, Checkbox} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('./Login.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: 'chui.lee8@gmail.com'}
  }

  handleSubmit(e) {
    e.preventDefault()
    const email = findDOMNode(this.ref.email).value
    const password = findDOMNode(this.ref.password).value
    const path = '/repos/${email}/${password}}'
    browserHistory.push(path)
  }

  render() {
    const ControlLabel = 'control-label'
    const key = "sdfsdfsdfsdfsdfsd"
    return (
      <div className='container'>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppearTimeout={1500}
          transitionAppear={true}>
          <Form key="1" horizontal onSubmit={this.handleSubmit}>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl ref="email" type="email" placeholder={this.state.email} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl ref="password" type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

