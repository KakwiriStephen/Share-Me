import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchQuery, feedQuery } from "../utils/data";

import { client } from "../client";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams;
  console.log(categoryId);

  const [pins, setPins] = useState(null);

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
        console.log(data);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
        console.log(data);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message="We are adding new ideas to your Feed" />;
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
