import { useState } from "react";
import Formik_Validation from "./Formik_Validation";
import "./Comments.css";

export default function Comments() {
  let [comments, setComments] = useState([
    { username: "@praj.26", remarks: "great job!", rating: 4 },
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
              <i>{comment.remarks}</i>
            </span>
            &nbsp;
            <span>(rating = {comment.rating})</span>&nbsp;
            <p>- {comment.username}</p>&nbsp;
          </div>
        ))}
      </div>

      <hr />
      <Formik_Validation addNewComment={addNewComment} />
    </>
  );
}
