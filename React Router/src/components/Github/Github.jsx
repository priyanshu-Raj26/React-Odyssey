import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const userData = useLoaderData();
  //   const [userData, setUserData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/priyanshu-Raj26")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setUserData(data);
  //         console.log(data);
  //       });
  //   }, []);

  return (
    <div className="bg-gray-600 text-white text-3xl m-4 p-4 text-center">
      Github followres: {userData.followers}
      <img
        className="flex items-center justify-center m-auto mt-4 rounded-full"
        src={userData.avatar_url}
        alt="Git Profile"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/priyanshu-Raj26");
  return response.json();
};
