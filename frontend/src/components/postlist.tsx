import React from 'react';
import { ListGroup, ListGroupItem, Container, Row } from 'react-bootstrap';
import { Post } from './post'

export const PostList: React.FC = () => {
  //TODO: factor out into API call in componentdidmount()
  let posts = [
    {
      author: "jim",
      body: "hello",
      title: "My Hard Beat",
      votes: 0,
      comments_count: 0
    },
    {
      author: "Bob",
      body: "goodbye",
      title: "My harder beat",
      votes: 0,
      comments_count: 0
    }
  ];
  let postList = posts.map((post) => {
    return (
      <ListGroupItem>
        <Post author={post.author} body={post.body} title={post.title} votes={post.votes} comments_count={post.comments_count}/>
      </ListGroupItem>
    )
  });
  return (
    <Container className="mt-3">
      <Row>
        
      </Row>
      <div></div>
      <ListGroup>
        {postList}
      </ListGroup>
    </Container>
  )
}