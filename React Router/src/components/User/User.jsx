import { useParams } from "react-router-dom";
import React from "react";

function User() {
  const { userId } = useParams();

  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center">
      User: {userId}
    </div>
  );
}

export default User;
