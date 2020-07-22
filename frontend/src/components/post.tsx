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
        <div>comments</div>
      </Col>
      <Col>
        <div className="post-title ml-3">{title}</div>
        <div className="float-right mt-1 post-tagline"> posted by {author}</div>
      </Col>
    </Row>
  </Container>
)
