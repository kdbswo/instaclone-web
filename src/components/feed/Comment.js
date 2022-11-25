import sanitizeHtml from "sanitize-html";
import styled from "styled-components";
import { FatText } from "../shared";
import PropTypes from "prop-types";

const CommentContainer = styled.div``;
const CommentCaption = styled.span`
  margin-left: 10px;
  mark {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Comment({ author, payload }) {
  const cleandPayload = sanitizeHtml(
    payload?.replace(/#[\w]+/g, "<mark>$&</mark>"),
    {
      allowedTags: ["mark"],
    }
  );
  return (
    <CommentContainer>
      <FatText>{author}</FatText>
      <CommentCaption
        dangerouslySetInnerHTML={{
          __html: cleandPayload,
        }}
      ></CommentCaption>
    </CommentContainer>
  );
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string,
};

export default Comment;
