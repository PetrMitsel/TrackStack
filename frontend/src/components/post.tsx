import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Container, Col, Row } from 'react-bootstrap';

interface Props{
  body: string;
  author: string;
  title: string;
  votes: number,
  comments_count: number;
}

export const Post: React.FC<Props> = ({ author, body, title, votes, comments_count }) => (
  <Container>
    <Row>
      <Col xs={1}>
              <div>{votes}</div>
              <div>votes</div>
      </Col>
      <Col xs={1}>
      <div>{comments_count}</div>
        <div className="text-left">comments</div>
      </Col>
      <Col>
        <div className="post-title">{title}</div>
      </Col>
    </Row>
  </Container>
)
