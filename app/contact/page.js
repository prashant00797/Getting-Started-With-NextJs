import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h6>Contact Page</h6>
      <Link href={"/contact/provider"}>
        <h6 className="underline">Provider</h6>
      </Link>
    </>
  );
};

export default page;
