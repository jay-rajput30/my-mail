import React from "react";
import { useParams } from "react-router-dom";

function SingleEmail() {
  const { id } = useParams();
  return <div>SingleEmail: {id}</div>;
}

export default SingleEmail;
