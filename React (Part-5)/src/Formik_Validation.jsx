import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be empty!";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  return errors;
};

export default function CommentsForm({ addNewComment }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      addNewComment(values);
      formik.resetForm();
    },
  });

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;

  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   };

  //   const handleSubmit = (e) => {
  //     addNewComment(formData);
  //     console.log(formData);
  //     e.preventDefault();
  //     setFormData({ username: "", remark: "", rating: 1 });
  //   };

  return (
    <div>
      <h2>Give a comment</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="enter username.."
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}
        <br />
        <br />
        <label htmlFor="remarks">Enter remark</label>
        <textarea
          name="remarks"
          id="remarks"
          placeholder="add few remarks.."
          value={formik.values.remarks}
          onChange={formik.handleChange}
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
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
