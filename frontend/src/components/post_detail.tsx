import React from "react"

interface Props{
  id: number;
  body: string;
  author: string;
  title: string;
  upvotes: number,
  downvotes: number
}

export const PostDetail: React.FC<Props> = ({ id, body, author, title, upvotes, downvotes}) => {
  return (
      <div></div>
  );
}