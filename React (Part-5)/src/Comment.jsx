import { useState } from "react";
import CommentsForm from "./CommentsForm";
import "./Comments.css";

export default function Comments() {
  let [comments, setComments] = useState([
    { username: "@praj.26", remark: "great job!", rating: 4 },
  ]);

  const addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h2>All comments</h2>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>
              <i>{comment.remark}</i>
            </span>
            &nbsp;
            <span>(rating = {comment.rating})</span>&nbsp;
            <p>- {comment.username}</p>&nbsp;
          </div>
        ))}
      </div>

      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
