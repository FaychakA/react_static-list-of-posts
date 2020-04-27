import React from 'react';
import './CommentList.css';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <Comment
        key={comment.id}
        name={comment.name}
        body={comment.body}
        email={comment.email}
      />
    ))}
  </ul>
);

export default CommentList;

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
