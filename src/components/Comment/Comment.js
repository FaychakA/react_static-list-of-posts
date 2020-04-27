import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <li className="CommentList__item">
    <p className="CommentList__name">
      <em>{name}</em>
    </p>

    <p className="CommentList__body">
      {body}
    </p>

    <a href={`mailto:${email}`} className="CommentList__email">
      {email}
    </a>
  </li>
);

export default Comment;

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
