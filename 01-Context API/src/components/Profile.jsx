import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div> Please Login </div>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome, {user.username}</p>
      <p>Your Password = {user.password}</p>
    </div>
  );
}

export default Profile;
