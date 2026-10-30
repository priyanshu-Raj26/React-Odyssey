import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clickes, setClickes] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClickes(clickes + 1);
  };

  let likeStyle = { color: "red" };

  return (
    <div>
      <p>Clickes = {clickes}</p>
      <br />
      <span onClick={toggleLike}>
        {isLiked === true ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </span>
    </div>
  );
}
