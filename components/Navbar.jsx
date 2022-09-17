import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div
      class="d-sm-flex mx-auto hstack  align-items-center"
      style={{ maxWidth: "2000px", background: "Blue", color: "white" }}
    >
      <div class="d-sm-flex mx-auto hstack gap-5 p-2 align-items-center">
        <Link href={"/"}>
          <a>Home </a>
        </Link>
        <Link href={"/experience"}>
          <a>Experience </a>
        </Link>
        <Link href={"/Contact"}>
          <a>Contact </a>
        </Link>
        <Link href={"/lab-07"}>
          <a>Lab-07 </a>
        </Link>
      </div>
    </div>
  );
}
