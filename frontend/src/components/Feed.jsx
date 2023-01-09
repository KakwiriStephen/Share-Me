import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchQuery, feedQuery } from "../utils/data";

import { client } from "../client";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  console.log(categoryId);

  const [pins, setPins] = useState();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);

      const query = searchQuery(categoryId);
      client.fetch(query).then((response) => {
        setPins(response);
        setLoading(false);
      });
    } else {
      setLoading(true);

      client.fetch(feedQuery).then((response) => {
        setPins(response);
        setLoading(false);
        console.log(response);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message="We are adding new ideas to your Feed" />;
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
