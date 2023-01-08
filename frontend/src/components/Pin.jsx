import React from "react";
import { urlFor } from "../client";

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
  return (
    <div>
      <img className="rounded-lg w-full" alt="user-post" src={urlFor(image)} />
    </div>
  );
};

export default Pin;
