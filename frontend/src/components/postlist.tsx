import React, { useEffect, useState, Props } from 'react';
import { ListGroup, ListGroupItem, Container, Row, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { PostPreview } from './post_preview'
import { API_HOST } from '../App'
import useAsyncEffect from 'use-async-effect'


export const PostList: React.FC = () => {
  //TODO: factor out into API call in componentdidmount()

  const [posts, setPosts] = useState<Array<any>>([]);

  useAsyncEffect(async () => {
    const response = await fetch(`${API_HOST}/posts`);
    const data = await response.json();
    setPosts(data);
  }, []);

  let postList = posts.map((post) => {
    return (
      <ListGroupItem>
        <PostPreview id={post.id} author={post.author.userName} body={post.body} title={post.title} votes={post.upvotes} comments_count={post.comments.length}/>
      </ListGroupItem>
    )
  });
  return (
    <Container className="mt-3">
      <ListGroup>
        <ListGroupItem>
          <div className="post-list-header">
            <div>
              Top Tracks
              <Button className="float-right" variant="dark">Post Track</Button>
            </div>
            <div>
              <ButtonGroup className="float-right" aria-label="First group">
                <Button variant="outline-dark">Trending</Button>
                <Button variant="outline-dark">For You</Button>
              </ButtonGroup>
            </div>
          </div>
        </ListGroupItem>
        {postList}
      </ListGroup>
    </Container>
  )
}