import React from 'react';
import { Container, Row, Col } from './../../components/bootstrap/Bootstrap';

export default function ProductLink(props) {
  if ((props.link !== '') & (props.linkText !== '')) {
    return (
      <Container className="pt-3 pl-0 ml-0">
        <Row>
          <Col>
            <a href={props.link} target="_blank">
              {props.linkText}
            </a>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return null;
  }
}
