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

  const [pins, setPins] = useState();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);

      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
        console.log(data);
      });
    } else {
      setLoading(true);

      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message="We are adding new ideas to your Feed" />;
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
