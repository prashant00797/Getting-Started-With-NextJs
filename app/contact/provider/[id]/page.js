"use client";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams();
  return <h6>Provider No: {id}</h6>;
};

export default Page;
