import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ fullname: "", username: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Enter your name</label>
      <input
        type="text"
        placeholder="Enter Your fullname..."
        value={formData.fullname}
        onChange={handleInputChange}
        id="fullname"
        name="fullname"
      />{" "}
      <br />
      <label htmlFor="username">Enter your name</label>
      <input
        type="text"
        placeholder="Enter Your Username..."
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"
      />{" "}
      <br />
      <label htmlFor="password">Enter password</label>
      <input
        type="password"
        placeholder="Enter password..."
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />{" "}
      <br />
      <br />
      <button type="submit">submit</button>
    </form>
  );
}
