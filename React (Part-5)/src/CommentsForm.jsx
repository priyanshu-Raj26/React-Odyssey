import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    addNewComment(formData);
    console.log(formData);
    e.preventDefault();
    setFormData({ username: "", remark: "", rating: 1 });
  };

  return (
    <div>
      <h2>Give a comment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="enter username.."
          value={formData.username}
          onChange={handleInputChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="remark">Enter remark</label>
        <textarea
          name="remark"
          id="remark"
          placeholder="add few remark.."
          value={formData.remark}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
