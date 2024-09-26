import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="border shadow p-3 rounded-md hover:bg-gray-200 cursor-pointer transition max-sm:flex mx-sm:gap-5">
      <div>
        <img
          src={`https://picsum.photos/seed/${movie.id}/200/300`}
          alt="poster"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Card;
