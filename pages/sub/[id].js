import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Board = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <h1>Sub{id} Page</h1>
      <p>
        <Link href="/">홈</Link>
      </p>
    </>
  );
};

export default Board;
